import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        catchError(error => {
          console.error('Error during login:', error);
          throw error;
        }),
        map(response => {
          // Vérifier si l'e-mail a été vérifié
          if (!response.emailVerified) {
            throw new Error('L\'e-mail n\'a pas été vérifié');
          }
          // Stocker l'utilisateur actuel dans le local storage
          localStorage.setItem('currentUser', JSON.stringify(response));
          return response;
        })
      );
  }
  

  
}
