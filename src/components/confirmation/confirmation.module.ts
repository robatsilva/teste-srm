import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { ConfirmationComponent } from './confirmation.component';
import { ShareModule } from '../../share/share.module';
import { SimulationResultModule } from '../simulation-result/simulation-result.module';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [ConfirmationRoutingModule, ShareModule, SimulationResultModule],
})
export class ConfirmationModule {}
