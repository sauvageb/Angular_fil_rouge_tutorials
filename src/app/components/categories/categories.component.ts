import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    NgForOf,
    MatActionList,
    MatCard,
    MatListItem
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories: Category[] = [
    {id: 1, name: "Java"},
    {id: 2, name: "Javascript"},
    {id: 3, name: "Typescript"},
    {id: 4, name: "PHP"},
    {id: 5, name: "C#"},
    {id: 6, name: "Angular"},
    {id: 7, name: "Ruby"},
    {id: 8, name: "Python"},
    {id: 9, name: "C++"},
    {id: 10, name: "Rust"},
    {id: 11, name: "VBA"},
  ];

}
