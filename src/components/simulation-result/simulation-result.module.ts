import { NgModule } from '@angular/core';
import { SimulationResultComponent } from './simulation-result.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [SimulationResultComponent],
  imports: [ShareModule],
  exports: [SimulationResultComponent],
})
export class SimulationResultModule {}
