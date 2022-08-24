import { Injectable } from '@angular/core';
import { catchError, mergeMap, of, Observable } from 'rxjs';
import { Simulator } from 'src/models/simulator';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService {
  simulator!: Simulator;
  constructor(private http: HttpClient) {}

  simulate(simulator: Simulator): Observable<Simulator> {
    // Mocking HTTP call
    return this.http.get('some-url').pipe(
      catchError(() => mockCalculator(simulator)),
      mergeMap(() => mockCalculator(simulator))
    )
  }
}

function mockCalculator(simulator: Simulator): Observable<Simulator> {
  // Mocking back end calculation
  const totalValue = +(simulator.value * (1.05 ** simulator.installments)).toFixed(2);
  const installmentValue = +(totalValue / simulator.installments).toFixed(2)
  return of({
    ...simulator,
    totalValue,
    installmentValue
  })
}
