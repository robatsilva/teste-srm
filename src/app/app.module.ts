import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from '../components/form/form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from '../components/modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from 'src/share/share.module';
import { SimulationResultModule } from 'src/components/simulation-result/simulation-result.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    SimulationResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
