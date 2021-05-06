import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CurrencyService, ConverterService } from '../services';
import { NumberDirective } from '../directives';
import { DateBrPipe } from '../pipes';
import { ModalComponent } from '../utils';
import { ConverterComponent } from './';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConverterComponent,
        NumberDirective,
        DateBrPipe,
        ModalComponent,
      ],
      providers: [CurrencyService, ConverterService],
      imports: [FormsModule, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
