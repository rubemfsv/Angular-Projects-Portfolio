import { DateBrPipe } from './date-br.pipe';

describe('DateBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DateBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format the date 2021-05-15 to 15/05/2021', () => {
    const pipe = new DateBrPipe();
    expect(pipe.transform('2021-05-15')).toEqual('15/05/2021');
  });
});
