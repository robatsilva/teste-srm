/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimulatorService } from './simulator.service';

describe('Service: Simulator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulatorService]
    });
  });

  it('should ...', inject([SimulatorService], (service: SimulatorService) => {
    expect(service).toBeTruthy();
  }));
});
