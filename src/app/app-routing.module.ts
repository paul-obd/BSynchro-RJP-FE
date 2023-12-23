import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './Shared/Guards/auth-guard.service';
import { LoginGuard } from './Shared/Guards/login-guard.service';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent , canActivate:[LoginGuard]},
  { path: 'customers', component: CustomersListComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
