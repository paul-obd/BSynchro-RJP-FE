import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamsLogin } from '../DTOs/APIParams';
import { Observable } from 'rxjs';
import { APIResponseLogin } from '../DTOs/APIResponses';
import { enviroment } from 'src/app/enviroments/enviroment';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  TOKEN_KEY = 'auth_token';
  baseUrl: string =  enviroment.baseUrl;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }
  
  isAuthenticated(): boolean {
      // Check if the token is present and not expired
      const token = this.getToken();
      // Perform additional checks, if needed, such as token expiration
      return !!token; // Return true if the token is present
  }
  
  login(param: ParamsLogin): Observable<APIResponseLogin>{
    return this.http.post<APIResponseLogin>(`${this.baseUrl}/auth/login`, param);
  }

  logout(): void {
    // Implement logout logic and remove the token
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      //Valid Token
      return token;
    } else {
      //Unvalid Token
      return null;
    }
  }

  setToken(token: string){
    //setting the token in local strorage
     localStorage.setItem(this.TOKEN_KEY, token);
  }
}
