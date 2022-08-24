import {
  Component,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Simulator } from 'src/models/simulator';

export interface DialogData {
  simulator: Simulator;
}

@Component({
  selector: 'app-modal',
  template: `<app-simulation-result
    [simulation]="data.simulator"
    [btnLabel]="'Confirmar Empréstimo'"
    [showCancel]="true"
    (btnCancelClick)="onCancelClick()"
    (btnOkClick)="onOkClick()"
  >
  </app-simulation-result>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  onOkClick(){
    this.router.navigate(['confirmation']);
    this.dialogRef.close();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
