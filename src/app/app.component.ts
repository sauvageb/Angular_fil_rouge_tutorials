import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {MatToolbar} from "@angular/material/toolbar";
import {TutorialsComponent} from "./components/tutorials/tutorials.component";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesComponent, MatToolbar, TutorialsComponent, MatAnchor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorials';
}
