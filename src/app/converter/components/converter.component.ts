import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Convertion, ConvertionResponse, Currency } from '../models';
import { ConverterService, CurrencyService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  currencies: Currency[];
  convertion: Convertion;
  hasError: boolean;
  convertionResponse: ConvertionResponse;

  @ViewChild('convertionForm', { static: true }) convertionForm: NgForm;

  constructor(
    private currencyService: CurrencyService,
    private converterService: ConverterService
  ) {}

  ngOnInit(): void {
    this.currencies = this.currencyService.listAll();
    this.init();
  }

  /**
   * Made the call to init
   *
   * @return void
   */
  init(): void {
    this.convertion = new Convertion('EUR', 'BRL', null);
    this.hasError = false;
  }

  /**
   * Made the call to convert the values
   *
   * @return void
   */
  converter(): void {
    if (this.convertionForm.form.valid) {
      this.converterService.converter(this.convertion).subscribe(
        (response) => {
          if (response.success === false) {
            this.hasError = true;
          } else {
            this.convertionResponse = response;
          }
        },
        (error) => (this.hasError = true)
      );
    }
  }
}
