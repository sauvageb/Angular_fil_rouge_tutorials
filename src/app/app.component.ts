import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {MatToolbar} from "@angular/material/toolbar";
import {TutorialsComponent} from "./components/tutorials/tutorials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, MatToolbar, TutorialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorials';
}
