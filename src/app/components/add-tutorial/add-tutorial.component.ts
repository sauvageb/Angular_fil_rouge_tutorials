import {Component} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TutorialsService} from "../../services/tutorials.service";
import {CategoriesService} from "../../services/categories.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatError, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {AsyncPipe, NgFor, NgIf} from "@angular/common";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatCardActions, MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";

@Component({
  selector: 'app-add-tutorial',
  standalone: true,
  imports: [
    MatLabel,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatError,
    MatSelect,
    AsyncPipe,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatCardActions,
    MatButton,
    MatInput,
    MatHint,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatOptionModule,
    MatOption,
    NgIf,
    NgFor
  ],
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent {


  dateInPast(): (control: AbstractControl) => Observable<{ [key: string]: boolean } | null> {
    return (control: AbstractControl): Observable<{ [key: string]: boolean } | null> => {
      return new Observable((observer) => {
        const currentDate = new Date();
        const selectedDate = new Date(control.value);

        currentDate.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
          observer.next({dateInPast: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      });
    };
  }

  private subscription!: Subscription;
  categories$ = this.categoriesService.getAll();

  addFormTutorial = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    content: ['', Validators.required],
    createdAt: [new Date(), [Validators.required], [this.dateInPast()]],
    category: ['', Validators.required],
  });


  constructor(private fb: FormBuilder,
              private tutorialsService: TutorialsService,
              private categoriesService: CategoriesService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  onSubmit(data: FormGroup) {
    let newTutorial: any = {
      title: data.value.title,
      description: data.value.description,
      content: data.value.content,
      author: "sauvageboris.pro@tutorial.fr",
      category: data.value.category
    };

    this.subscription = this.tutorialsService
      .createTutorial(newTutorial)
      .subscribe({
        next: (data: any) => {
          this.router.navigate(['/all'])
          this.snackBar.open('Tutoriel créé avec succès', 'Fermer', {
            duration: 3000,
          });
        },
        error: (err: any) => {
          this.snackBar.open('Une erreur est survenue', 'Fermer', {
            duration: 3000,
          });
          console.log(`Une erreur est survenue : ${JSON.stringify(err)}`);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  get f() {
    return this.addFormTutorial.controls;
  }

}
