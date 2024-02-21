import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatChip, MatChipListbox} from "@angular/material/chips";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {SortTutorialByDatePipe} from "../../pipes/sort-tutorial-by-date.pipe";
import {MatBadge} from "@angular/material/badge";
import {HoverHighlightDirective} from "../../directives/hover-highlight.directive";
import {Tutorial} from "../../models/tutorial";

@Component({
  selector: 'app-tutorials',
  standalone: true,
  imports: [
    NgForOf,
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatChipListbox,
    MatChip,
    UpperCasePipe,
    MatDivider,
    MatCardActions,
    DatePipe,
    MatButton,
    MatIconModule,
    MatCardFooter,
    NgIf,
    MatList,
    MatListItem,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    SortTutorialByDatePipe,
    MatBadge,
    HoverHighlightDirective
  ],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent implements OnInit {

  tutorials!: Tutorial[];
  collapseComments: boolean = false;
  sortByDate: string = "DESC";

  ngOnInit(): void {
    this.tutorials = [
      {
        id: 1,
        title: "Afficher une liste avec Material Angular",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam aspernatur cupiditate deserunt dignissimos dolor doloremque eligendi eos est excepturi expedita ipsam laboriosam laborum laudantium natus omnis quaerat quas, qui quibusdam ratione reiciendis tenetur ullam unde vel velit vitae voluptatum. Illum inventore ipsam odit perferendis ratione. At consequatur, ratione!",
        author: {id: 1, email: "j.doe@tuto.fr", firstName: "John", lastName: "doe"},
        category: {id: 6, name: "Angular"},
        createdAt: new Date(2055, 0, 30),
        comments: []
      },
      {
        id: 2,
        title: "Initiation au langage Java",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam aspernatur cupiditate deserunt dignissimos dolor doloremque eligendi eos est excepturi expedita ipsam laboriosam laborum laudantium natus omnis quaerat quas, qui quibusdam ratione reiciendis tenetur ullam unde vel velit vitae voluptatum. Illum inventore ipsam odit perferendis ratione. At consequatur, ratione!",
        author: {id: 2, email: "j.waaaa@tuto.fr", firstName: "Jane", lastName: "waaaa"},
        category: {id: 1, name: "Java"},
        createdAt: new Date(2055, 11, 2),
        comments: [
          {
            id: 10,
            content: "Super tuto ! Bravo Jane",
            author: {id: 2, email: "j.waaaa@tuto.fr", firstName: "Jane", lastName: "waaaa"}
          },
          {
            id: 11,
            content: "Très intéressant, merci pour le partage",
            author: {id: 1, email: "j.doe@tuto.fr", firstName: "John", lastName: "doe"}
          },
        ]
      },
      {
        id: 3,
        title: "Initiation au macro VBA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam aspernatur cupiditate deserunt dignissimos dolor doloremque eligendi eos est excepturi expedita ipsam laboriosam laborum laudantium natus omnis quaerat quas, qui quibusdam ratione reiciendis tenetur ullam unde vel velit vitae voluptatum. Illum inventore ipsam odit perferendis ratione. At consequatur, ratione!",
        author: {id: 2, email: "b.sau@tuto.fr", firstName: "Boris", lastName: "Sau"},
        category: {id: 1, name: "VBA"},
        createdAt: new Date(2055, 8, 16),
        comments: [
          {
            id: 12,
            content: "Excel est vraiment génial avec VBA",
            author: {id: 2, email: "j.waaaa@tuto.fr", firstName: "Jane", lastName: "waaaa"}
          },
        ]
      }
    ];
  }


  showComments(tuto: Tutorial) {
    if (tuto.comments.length > 0) {
      this.collapseComments = !this.collapseComments;
    }
  }
}
