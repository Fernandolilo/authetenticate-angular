import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Certifique-se de que o caminho para o AuthService está correto

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenha o token do AuthService
    const authToken = this.authService.getToken();

    // Clone a requisição e adicione o header Authorization
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Passe a requisição clonada para o próximo handler
    return next.handle(authReq);
  }
}
