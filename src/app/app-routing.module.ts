import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from '../components/form/form.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: FormComponent,
      },
      {
        path: 'confirmation',
        loadChildren: () =>
          import('../components/confirmation/confirmation.module').then(
            (m) => m.ConfirmationModule
          ),
      },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
