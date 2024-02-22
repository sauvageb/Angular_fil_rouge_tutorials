import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortTutorialByDate',
  standalone: true
})
export class SortTutorialByDatePipe implements PipeTransform {

  transform(tutorials: any[], order: string): any[] {
    if (tutorials && tutorials.length > 0) {
      if (order === 'DESC') {
        return tutorials.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
      } else {
        return tutorials.sort((a, b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
      }
    }
    return tutorials;
  }
}
