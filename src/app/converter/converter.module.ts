import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './components';
import { ConverterService, CurrencyService } from './services';
import { NumberDirective } from './directives';
import { ModalComponent } from './utils';
import { DateBrPipe } from './pipes';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [
    ConverterComponent,
    NumberDirective,
    ModalComponent,
    DateBrPipe,
  ],
  exports: [ConverterComponent],
  providers: [CurrencyService, ConverterService],
})
export class ConverterModule {}
