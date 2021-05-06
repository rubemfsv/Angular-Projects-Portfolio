import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  readonly datas = [
    ['January', 33],
    ['February', 68],
    ['March', 49],
    ['April', 15],
    ['May', 80],
    ['June', 27],
  ];

  constructor() {}

  /**
   * Returns an observable containing tha datas to be
   * showed in the graph
   *
   * @return Observable<any>
   */
  obtainsData(): Observable<any> {
    return new Observable((observable) => {
      observable.next(this.datas);
      observable.complete();
    });
  }
}
