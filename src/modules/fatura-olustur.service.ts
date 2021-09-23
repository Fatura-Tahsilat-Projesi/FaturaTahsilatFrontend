import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaturaModel } from '../models/faturamodel';
import { catchError, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
         'Accept': 'text/html, application/xhtml+xml, */*',
         'Content-Type': 'application/json; charset=UTF-8',
         'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FaturaOlusturService {
  //url =  "https://localhost:44389/api/TodoItems/";
  //url =  "https://localhost:44347/api/products/";
  url =  "https://faturatahsilat.azurewebsites.net/api/products/";
  
  handleError: any;
  constructor(private http:HttpClient) { }

  /*requestFunction(fatura: Fatura): Observable<Fatura> {
    return this.http.post<Fatura>(this.heroesUrl, fatura, httpOptions)
    .pipe(
      catchError(this.handleError('', fatura))
    );
  }*/


  faturaDetayGetir(id: number):Observable<FaturaModel> {
    return this.http.get<FaturaModel>(this.url + id);
  }

  deleteFatura(id: number): Observable<unknown> {
    //const url2 = `${this.url}/$id`;
    const url = `${this.url}${id}`;
    console.log("url => "+url);
    return this.http.delete(url, httpOptions)
    .pipe(
      
    )
    /*.pipe(
      //catchError(this.handleError('deleteFatura'))
    );*/
  }

  faturaOlustur(fatura: FaturaModel): Observable<FaturaModel>{
    console.log("Servis fonksiyona girildi!");
    //console.log("FaturaOlusturFonksiyonIci => " + fatura.name + "-"+ fatura.tutar + "-"+ fatura.kdvsizTutar + "-" + fatura.categoryId );

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':'application/json',
    //     'Authorization': 'Token'
    //   })
    // };
    const body = { 
      "name": "Sql",
      "tutar": 12.5,
      "kdvsizTutar": 5,
      "categoryId": 2
   };
    return this.http.post<FaturaModel>(this.url, fatura, httpOptions);

    // setHeaders:
    // {
    //     'Authorization': 'Bearer ' + this.token,  //+ this.token, //'80fbbf2c-236b-4b25-b47b-3ccabb42e2dd', //80fbbf2c-236b-4b25-b47b-3ccabb42e2dd
    //     'Accept': 'text/html, application/xhtml+xml, */*',
    //     'Content-Type': 'application/json; charset=UTF-8',
    //     'Access-Control-Allow-Origin': '*'
    // }


    // return this.http.post(this.CaptchaUrl, { 
    //   "name": "TürkNet",
    // "tutar": 12.5,
    // "kdvsizTutar": 5,
    // "categoryId": 2 })

    // );











  }

}



