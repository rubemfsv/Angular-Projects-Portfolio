import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Convertion, ConvertionResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private readonly BASE_URL =
    'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  constructor(private http: HttpClient) {}

  /**
   * Realize the API call de convert currency.
   *
   * @param Convertion convertion
   * @return Observable<ConvertionResponse>
   */
  converter(convertion: Convertion): Observable<any> {
    let params = `&base=${convertion.currencyFrom}&symbols=${convertion.currencyTo}`;
    return this.http.get(this.BASE_URL + params);
  }

  /**
   * Returns the quotation for given a response.
   *
   * @param ConvertionResponse convertionResponse
   * @param Convertion convertion
   * @return string
   */
  quotationFrom(
    convertionResponse: ConvertionResponse,
    convertion: Convertion
  ): string {
    if (convertionResponse === undefined) {
      return '0';
    }
    return (1 / convertionResponse.rates[convertion.currencyTo]).toFixed(4);
  }

  /**
   * Returns the quotation for given a response.
   *
   * @param ConvertionResponse convertionResponse
   * @param Convertion convertion
   * @return number
   */
  quotationTo(
    convertionResponse: ConvertionResponse,
    convertion: Convertion
  ): number {
    if (convertionResponse === undefined) {
      return 0;
    }
    return convertionResponse.rates[convertion.currencyTo];
  }

  /**
   * Returns the quotation date for given a response.
   *
   * @param ConvertionResponse convertionResponse
   * @return string
   */
  dateCotacao(convertionResponse: ConvertionResponse): string {
    if (convertionResponse === undefined) {
      return '';
    }
    return convertionResponse.date;
  }
}
