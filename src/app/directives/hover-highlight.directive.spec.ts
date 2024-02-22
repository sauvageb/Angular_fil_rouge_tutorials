import {HoverHighlightDirective} from './hover-highlight.directive';
import {ElementRef, Renderer2} from "@angular/core";

describe('HoverHighlightDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const renderer2Mock = {} as Renderer2;
    const directive = new HoverHighlightDirective(elementRefMock, renderer2Mock);
    expect(directive).toBeTruthy();
  });
});
