import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { ParamsLogin } from '../Shared/DTOs/APIParams';
import { AuthService } from '../Shared/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailOrUsername: [''],
      password: [''],
    })
  }
  onLogin() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      if (res.success == true && res.data.token != null && res.data.token != "") {
        this.authService.setToken(res.data.token);
        this.route.navigate(['/customers']);
      }else{
        //should show a toats message use angular material to do so
      }
    })
  }


}
