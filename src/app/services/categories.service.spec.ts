import {TestBed} from '@angular/core/testing';

import {CategoriesService} from './categories.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BASE_API_URL} from "../constants/injection";

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CategoriesService,
        {provide: BASE_API_URL, useValue: 'x'} // Provide the BASE_API_URL token
      ]
    });
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
