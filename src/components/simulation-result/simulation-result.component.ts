import { Simulator } from './../../models/simulator';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-simulation-result',
  templateUrl: './simulation-result.component.html',
  styleUrls: ['./simulation-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimulationResultComponent implements OnInit {
  @Input() simulation!: Simulator;
  @Input() btnLabel!: string;
  @Input() showCancel!: boolean;

  @Output() btnOkClick = new EventEmitter();
  @Output() btnCancelClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
