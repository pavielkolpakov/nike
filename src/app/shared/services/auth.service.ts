import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/state/auth/auth.reducers';

export interface AuthStateService {
  user: AuthUser
}

export interface AuthPayload {
  username: string,
  email: string,
  password: string
}

export interface AuthUser {
  id?: number,
  email: string,
  username: string,
  token: string,
  bio: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
    // public readonly cookieService
  ) { }

  public initUser(): Observable<AuthStateService> {
    const url = 'https://api.realworld.io/api/user';

    return this.http.get<AuthStateService>(url);
  }

  public register(email: string, password: string, username: string): Observable<AuthStateService> {
    const url = 'https://api.realworld.io/api/users';
    const body = {
      user: {
        email: email, 
        username: username, 
        password: password
      }
    };

    return this.http.post<AuthStateService>(url, body);
  }

  public login(email: string, password: string): Observable<AuthStateService> {
    const url = 'https://api.realworld.io/api/users/login';
    const body = {
      user: {
        email: email,
        password: password
      }
    };

    return this.http.post<AuthStateService>(url, body);
  }
}
