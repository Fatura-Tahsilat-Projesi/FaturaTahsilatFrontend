import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { FaturaModel } from "src/models/faturamodel";
import { InvoiceActivitiesModel } from "src/models/invoiceactivitiesmodel";
import { ServisGelenVeriler } from "src/modules/data/ServisGelenVeriler";

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class FaturaService {

    url = "https://localhost:44389/api/invoices/";
    result:ServisGelenVeriler[]=[];

    constructor(private http: HttpClient) {}

    getFatura():Observable<ServisGelenVeriler[]> {
        return this.http.get<ServisGelenVeriler[]>(this.url)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }


    getFaturaById(id: number): Observable<ServisGelenVeriler> {
        return this.http.get<ServisGelenVeriler>(this.url + id)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    createFatura(fatura: FaturaModel): Observable<FaturaModel> {
        return this.http.post<FaturaModel>(this.url, fatura, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    updateInvoice(invoice: FaturaModel): Observable<FaturaModel> {
        return this.http.put<FaturaModel>(this.url, invoice, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    deleteInvoice(id: number): Observable<unknown>
    {
        //const url = `${this.url}${id}`;
        return this.http.delete(this.url + id, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
        
    }




    private handleError(error: HttpErrorResponse) {

        if(error.error instanceof ErrorEvent) {
            //Client veya Network Taraflı
            console.log("Error: "+ error.error.message);
        } else {
            //Backend Taraflı
            console.log("Error else: "+ error.status);
            //!TODO ileride mesajlar düzenlenmesi gerekiyor.
            // switch(error.status) {
            //     case 404:
            //         console.log("Not Found");
            //         break;
            //     case 403:
            //         console.log("Access Denied");
            //         break;
            //     case 500:
            //         console.log("Internal Server");
            //         break;
            //     default:
            //          console.log("Bilinmeyen Bir Hata");
            // }
        }

        {

        }

        return throwError("Bir hata oluştu!");
    }


}