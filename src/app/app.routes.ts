import { Routes } from '@angular/router';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';

export const routes: Routes = [
  { path: '', component: BootstrapTestComponent },
  { path: 'bootstrap-test', component: BootstrapTestComponent }
];
