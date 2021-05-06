export class ConvertionResponse {
  constructor(public base: string, public date: string, public rates: any) {}
}

/**
 * Response example:
 * {
 *  "base": "USD",
 *  "date": "2017-03-08",
 *  "rates": {
 *              "BRL": 3.1405
 *            }
 * }
 */
