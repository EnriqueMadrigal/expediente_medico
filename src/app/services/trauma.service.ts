import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { Traumatismo } from '../models/Traumatismo';
import { Observable } from 'rxjs';
import { ResponseData } from '../models/ResponseData';

@Injectable({
    providedIn: 'root'
})
export class TraumaService {
    headers: HttpHeaders;
    requestOptions: Object;

    private TraumaUrl = '/api/trauma/';
    

    constructor(
        private http: HttpClient) {
            this.headers = new HttpHeaders({
            'accept':'*/*'
        });
        this.requestOptions = {
            headers: this.headers,
            responseType: 'text'
        }
    }


public register(trauma: Traumatismo) {


const httpOptions = {
 headers: new HttpHeaders({
   'Content-Type': 'application/json'
 }),
 withCredentials: true
};

    return this.http.post<any>(`${this.TraumaUrl}`, trauma , httpOptions).pipe(
      tap(res => {
        //localStorage.setItem('token', res.access_token);
        console.log(res);
      })
    );
  }

public update(trauma: Traumatismo) {


const httpOptions = {
 headers: new HttpHeaders({
   'Content-Type': 'application/json'
 }),
 withCredentials: true
};

    return this.http.put<any>(`${this.TraumaUrl}`, trauma , httpOptions).pipe(
      tap(res => {
        //localStorage.setItem('token', res.access_token);
        console.log(res);
      })
    );
  }



    
     public getTrauma(id: string): Observable<Traumatismo> {
        return this.http.get<Traumatismo>(this.TraumaUrl + id, {});
    }

     public deleteTrauma(id: string): Observable<ResponseData> {
        return this.http.delete<ResponseData>(this.TraumaUrl + id, {});
    }



}
