import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Convertion, ConvertionResponse } from '../models';
import { ConverterService } from '../services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  @Input() convertionResponse: ConvertionResponse;
  @Input() convertion: Convertion = new Convertion();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter;

  constructor(private converterService: ConverterService) {}

  ngOnInit(): void {}

  newSearch(){
    this.onConfirm.emit()
  }

  get convertedValue(): string {
    if (this.convertionResponse === undefined) {
      return '0';
    }

    return (
      this.convertion.amount *
      this.convertionResponse.rates[this.convertion.currencyTo]
    ).toFixed(2);
  }

  get quotationFrom(): string {
    return this.converterService.quotationFrom(
      this.convertionResponse,
      this.convertion
    );
  }

  get quotationTo(): number {
    return this.converterService.quotationTo(
      this.convertionResponse,
      this.convertion
    );
  }

  get dateQuotation(): string {
    return this.converterService.dateCotacao(this.convertionResponse);
  }
}
