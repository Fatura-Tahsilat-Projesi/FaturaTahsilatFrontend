import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaturaModel } from '../models/faturamodel';

const httpOptions = {
  /*headers: new HttpClient({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })*/
};

@Injectable({
  providedIn: 'root'
})
export class FaturaOlusturService {
  //url =  "https://localhost:44389/api/TodoItems/";
  url =  "https://localhost:44347/weatherforecast/";
  handleError: any;
  constructor(private http:HttpClient) { }

  /*requestFunction(fatura: Fatura): Observable<Fatura> {
    return this.http.post<Fatura>(this.heroesUrl, fatura, httpOptions)
    .pipe(
      catchError(this.handleError('', fatura))
    );
  }*/

  deleteFatura(id: number): Observable<unknown> {
    //const url2 = `${this.url}/$id`;
    const url = `${this.url}${id}`;
    console.log("url => "+url);
    return this.http.delete(url, httpOptions);
    /*.pipe(
      //catchError(this.handleError('deleteFatura'))
    );*/
  }

  faturaOlustur(fatura: FaturaModel): Observable<FaturaModel>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'token'
      })
    };
    return this.http.post<FaturaModel>(this.url, fatura, httpOptions);
  }

}



