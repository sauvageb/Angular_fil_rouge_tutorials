import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import {CategoriesService} from "../../services/categories.service";

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
export class CategoriesComponent implements OnInit {

  categories!: any[];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categories = this.categoriesService.getAll();
  }


}
