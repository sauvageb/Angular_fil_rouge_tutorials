import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorials';
}
