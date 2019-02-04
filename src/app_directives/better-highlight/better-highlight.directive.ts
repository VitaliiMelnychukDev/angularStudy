import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    /*this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'red'
    );*/
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'red'
    );*/
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    );*/
    this.backgroundColor = this.defaultColor;
  }

}
