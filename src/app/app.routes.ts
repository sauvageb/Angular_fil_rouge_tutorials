import {Routes} from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {TutorialsComponent} from "./components/tutorials/tutorials.component";
import {AddTutorialComponent} from "./components/add-tutorial/add-tutorial.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: CategoriesComponent},
  {path: 'all', component: TutorialsComponent},
  {path: 'tutorials/add', component: AddTutorialComponent},
  {path: '**', redirectTo: '/'}
];
