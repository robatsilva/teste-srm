import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SimulatorService } from '../../services/simulator.service';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: (object: unknown) => ({}) });
    const matDialogStub = () => ({ open: (modalComponent: unknown, object: unknown) => ({}) });
    const simulatorServiceStub = () => ({
      simulate: (value: unknown) => ({ pipe: () => ({}) }),
      simulator: {}
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: MatDialog, useFactory: matDialogStub },
        { provide: SimulatorService, useFactory: simulatorServiceStub }
      ]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'buildForm').and.callThrough();
      component.ngOnInit();
      expect(component.buildForm).toHaveBeenCalled();
    });
  });

  describe('buildForm', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.buildForm();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });

  describe('simulate', () => {
    it('makes expected calls', () => {
      const simulatorServiceStub: SimulatorService = fixture.debugElement.injector.get(
        SimulatorService
      );
      spyOn(simulatorServiceStub, 'simulate').and.callThrough();
      component.simulate();
      expect(simulatorServiceStub.simulate).toHaveBeenCalled();
    });
  });

  describe('openDialog', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      component.openDialog();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
