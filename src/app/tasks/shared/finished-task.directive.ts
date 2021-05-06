import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[finishedTask]',
})
export class FinishedTaskDirective implements OnInit {
  @Input() finishedTask: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.finishedTask) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }
}
