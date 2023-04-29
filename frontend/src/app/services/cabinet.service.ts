import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabinet } from '../models/cabinet';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  private getUrl: string ="http://localhost:8081/api/v1/cabinets";

  constructor(private _httpclient:HttpClient) { }
  getCabinets(): Observable<Cabinet[]>{
    return this._httpclient.get<Cabinet[]>(this.getUrl).pipe(
      map(response=>response)
    )
  }
  saveCabinet(cabinet: Cabinet): Observable<Cabinet>{
    return this._httpclient.post<Cabinet>(this.getUrl,cabinet);
  }
  getCabinet(id: number):Observable<Cabinet>{
    return this._httpclient.get<Cabinet>(`${this.getUrl}/${id}`).pipe(
      map(response=>response)
      )
  }
  deleteCabinet(id: number):Observable<any>{
    return this._httpclient.delete(`${this.getUrl}/${id}`,{responseType:'text'});
  }
}
