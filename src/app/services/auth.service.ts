import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private apiUrl = 'https://your-api-url.com'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          // Supondo que a resposta contenha o token JWT
          if (response && response.token) {
            this.setToken(response.token);
          }
        })
      );
  }
}
