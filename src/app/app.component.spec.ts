import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the HTML5 title 'Tutorials'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBe("tutorials");
  });

  it(`should have the 'Tutorials App' title in the toolbar`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const toolbarElement: HTMLElement = fixture.nativeElement.querySelector('mat-toolbar span');
    expect(toolbarElement.textContent).toContain('Tutorials App');
  });

});
