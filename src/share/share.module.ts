import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { SimulationResultModule } from '../components/simulation-result/simulation-result.module';
import { CommonModule } from '@angular/common';
const modules = [
  CommonModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class ShareModule {}
