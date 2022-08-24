import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Simulator } from 'src/models/simulator';
import { SimulatorService } from './simulator.service';

describe('SimulatorService', () => {
  let service: SimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SimulatorService]
    });
    service = TestBed.inject(SimulatorService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('simulate', () => {
    it('makes expected calls', () => {
      const simulatorStub: Simulator = <any>{
        value: 10,
        installments: 10,
        name: 'test',
        totalValue: 16.29,
        installmentValue: 1.63
      };
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.simulate(simulatorStub).subscribe(res => {
        expect(res).toEqual(simulatorStub);
      });
      const req = httpTestingController.expectOne('some-url');
      expect(req.request.method).toEqual('GET');
      req.flush(simulatorStub);
      httpTestingController.verify();
    });
  });
});
