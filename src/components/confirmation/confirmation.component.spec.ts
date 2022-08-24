import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SimulatorService } from '../../services/simulator.service';
import { ConfirmationComponent } from './confirmation.component';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(() => {
    const simulatorServiceStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ConfirmationComponent],
      providers: [
        { provide: SimulatorService, useFactory: simulatorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
