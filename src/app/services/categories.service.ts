import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() {
  }

  getAll(): any[] {
    const categories = [
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
    return categories;
  }
}
