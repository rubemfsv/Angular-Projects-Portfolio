import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[number]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumberDirective,
      multi: true,
    },
  ],
})
export class NumberDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) {}

  /**
   * Implements the keyup event to the directive element
   *
   * @param any $event
   */
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any): void {
    let value = $event.target.value;
    let posDecimal = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if (posDecimal > 0) {
      value = value.substr(0, posDecimal) + '.' + value.substr(posDecimal);
    }

    $event.target.value = value;
    this.onChange(value);
  }

  /**
   * Register the function to be called to refresh the model value
   *
   * @param any fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Register the function to be called to refresh the model value
   * ti tge touched event
   *
   * @param any fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Obtains the value that the model contains
   *
   * @param any value
   */
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }
}
