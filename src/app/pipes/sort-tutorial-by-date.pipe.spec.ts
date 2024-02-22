import {SortTutorialByDatePipe} from './sort-tutorial-by-date.pipe';

describe('SortTutorialByDatePipe', () => {
  let pipe: SortTutorialByDatePipe;

  beforeEach(() => {
    pipe = new SortTutorialByDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the tutorials sorted by date in ascending order', () => {
    const tutorials = [
      {id: 1, createdAt: '2024-02-20T12:00:00Z'},
      {id: 2, createdAt: '2024-02-22T12:00:00Z'},
      {id: 3, createdAt: '2024-02-21T12:00:00Z'}
    ];
    const sortedTutorials = pipe.transform(tutorials, 'ASC');
    expect(sortedTutorials).toEqual([
      {id: 1, createdAt: '2024-02-20T12:00:00Z'},
      {id: 3, createdAt: '2024-02-21T12:00:00Z'},
      {id: 2, createdAt: '2024-02-22T12:00:00Z'}
    ]);
  });

  it('should return the tutorials sorted by date in descending order', () => {
    const tutorials = [
      {id: 1, createdAt: '2024-02-20T12:00:00Z'},
      {id: 2, createdAt: '2024-02-22T12:00:00Z'},
      {id: 3, createdAt: '2024-02-21T12:00:00Z'}
    ];
    const sortedTutorials = pipe.transform(tutorials, 'DESC');
    expect(sortedTutorials).toEqual([
      {id: 2, createdAt: '2024-02-22T12:00:00Z'},
      {id: 3, createdAt: '2024-02-21T12:00:00Z'},
      {id: 1, createdAt: '2024-02-20T12:00:00Z'}
    ]);
  });

  it('should return the input array if it is empty', () => {
    const tutorials: any[] = [];
    const sortedTutorials = pipe.transform([], 'ASC');
    expect(sortedTutorials).toEqual([]);
  });

});
