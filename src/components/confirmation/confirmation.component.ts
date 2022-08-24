import { Component, OnInit } from '@angular/core';
import { SimulatorService } from '../../services/simulator.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(public simulatorService: SimulatorService) { }

  ngOnInit(): void {
  }

}
