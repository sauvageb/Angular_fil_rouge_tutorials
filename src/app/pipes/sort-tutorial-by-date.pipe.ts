import {Pipe, PipeTransform} from '@angular/core';
import {Tutorial} from "../models/tutorial";

@Pipe({
  name: 'sortTutorialByDate',
  standalone: true
})
export class SortTutorialByDatePipe implements PipeTransform {

  transform(tutorials: Tutorial[], order: string): any[] {
    if (tutorials && tutorials.length > 0) {
      if (order === 'DESC') {
        return tutorials.sort((a, b) => {
          return b.createdAt.getTime() - a.createdAt.getTime();
        });
      } else {
        return tutorials.sort((a, b) => {
          return a.createdAt.getTime() - b.createdAt.getTime();
        });
      }
    }
    return tutorials;
  }
}
