import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './Shared/Services/auth.service';
import { AuthGuard } from './Shared/Guards/auth-guard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerSubmitComponent } from './customer-submit/customer-submit.component';
import { TokenInterceptor } from './Shared/Interceptors/token.interceptor';
import { InitialAccountAddComponent } from './initial-account-add/initial-account-add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersListComponent,
    CustomerViewComponent,
    CustomerSubmitComponent,
    InitialAccountAddComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    JwtModule.forRoot({ // Add JwtModule configuration here
      config: {
        tokenGetter: () => {
          return localStorage.getItem('auth_token');
        },
        allowedDomains: ['http://localhost:4200'], // Replace with your domain or '*' for all domains
        disallowedRoutes: ['http://localhost:4200/login'] // Replace with your login route
      }
    }),

  ],
  providers: [
    AuthService, 
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
