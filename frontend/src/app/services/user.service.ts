import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getUrl: string ="http://localhost:8081/api/v1/users";

  constructor(private _httpclient:HttpClient) { }
  getUsres(): Observable<User[]>{
    return this._httpclient.get<User[]>(this.getUrl).pipe(
      map(response=>response)
    )
  }
  saveUser(user: User): Observable<User>{
    return this._httpclient.post<User>(this.getUrl,user);
  }
  getuser(id: number):Observable<User>{
    return this._httpclient.get<User>(`${this.getUrl}/${id}`).pipe(
      map(response=>response)
      )
  }
  deleteUser(id: number):Observable<any>{
    return this._httpclient.delete(`${this.getUrl}/${id}`,{responseType:'text'});
  }
  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.getUrl}/emailExists/${email}`;
    return this._httpclient.get<boolean>(url);
}

}
