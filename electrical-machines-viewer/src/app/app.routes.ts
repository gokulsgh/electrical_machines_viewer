import { Routes } from '@angular/router';
import { MachinesListComponent } from './machines-list/machines-list.component';
import { MachineDetailComponent } from './machine-detail/machine-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/machines', pathMatch: 'full' },
  { path: 'machines', component: MachinesListComponent },
  { path: 'machine/:id', component: MachineDetailComponent }
];
