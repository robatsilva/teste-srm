import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ModalComponent } from "./modal.component";

describe("ModalComponent", () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    const matDialogDataStub = () => ({ simulator: {}});
    const matDialogRefStub = () => ({ close: () => ({}) });
    const routerStub = () => ({ navigate: (array: unknown) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ModalComponent],
      providers: [
        { provide: MatDialogRef, useFactory: matDialogRefStub },
        { provide: Router, useFactory: routerStub },
        { provide: MAT_DIALOG_DATA, useFactory: matDialogDataStub }
      ]
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it("can load instance", () => {
    expect(component).toBeTruthy();
  });

  describe("onOkClick", () => {
    it("makes expected calls", () => {
      const matDialogRefStub: MatDialogRef<ModalComponent> = fixture.debugElement.injector.get(
        MatDialogRef
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(matDialogRefStub, "close").and.callThrough();
      spyOn(routerStub, "navigate").and.callThrough();
      component.onOkClick();
      expect(matDialogRefStub.close).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe("onCancelClick", () => {
    it("makes expected calls", () => {
      const matDialogRefStub: MatDialogRef<ModalComponent> = fixture.debugElement.injector.get(
        MatDialogRef
      );
      spyOn(matDialogRefStub, "close").and.callThrough();
      component.onCancelClick();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
