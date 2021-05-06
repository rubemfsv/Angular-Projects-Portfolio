import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assure that 1 + 4 = 5', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }
  ));

  it('should assure that 4 - 1 = 3', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let subtracao = service.calcular(4, 1, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(3);
    }
  ));

  it('should assure that 4 / 2 = 2', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    }
  ));

  it('should assure that 4 * 2 = 8', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let multiplicacao = service.calcular(
        4,
        2,
        CalculadoraService.MULTIPLICACAO
      );
      expect(multiplicacao).toEqual(8);
    }
  ));

  it('should assure that 4 * 2 = 8', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(4, 2, '%');
      expect(operacaoInvalida).toEqual(0);
    }
  ));
});
