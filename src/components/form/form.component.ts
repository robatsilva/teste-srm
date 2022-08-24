import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, tap } from 'rxjs';
import { Simulator } from 'src/models/simulator';
import { SimulatorService } from '../../services/simulator.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  simulator$!: Observable<Simulator>;
  constructor(
    private fb: FormBuilder,
    private simulatorService: SimulatorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      value: [null, [Validators.required, Validators.min(1)]],
      installments: [null, [Validators.required, Validators.min(1)]],
    });
  }

  simulate() {
    this.simulator$ = this.simulatorService
      .simulate(this.form.value)
      .pipe(tap((simulator: Simulator) => (this.simulatorService.simulator = simulator)));
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '350px',
      data: { simulator: this.simulatorService.simulator },
    });
  }
}
