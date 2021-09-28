import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { GlobalVariable } from "src/global/global-variable";
import { FaturaModel } from "src/models/faturamodel";
import { InvoiceActivitiesModel } from "src/models/invoiceactivitiesmodel";
import { InvoiceAndActivitiesData } from "src/modules/data/InvoiceAndActivitiesData";
import { ServisGelenVeriler } from "src/modules/data/ServisGelenVeriler";
import { AuthService } from "./auth.service";

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class FaturaService {

    url = GlobalVariable.backendUrl +"api/invoices/";
    result:ServisGelenVeriler[]=[];

    constructor(private http: HttpClient,
        private authService:AuthService) {}

    getFatura():Observable<ServisGelenVeriler[]> {
        //httpOptions.headers.append = this.authService.getToken();
        return this.http.get<ServisGelenVeriler[]>(this.url, httpOptions)
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

    getWithInvoiceActivitiesById(id: number): Observable<InvoiceAndActivitiesData> {
        //https://localhost:44389/api/invoices/
        //https://localhost:44389/api/invoices/5/invoiceActivities
        const newUrl = this.url + id + '/invoiceActivities';
        return this.http.get<InvoiceAndActivitiesData>(newUrl);
    }

    createFatura(fatura: FaturaModel): Observable<FaturaModel> {
        return this.http.post<FaturaModel>(this.url, fatura, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    updateInvoice(invoice: FaturaModel | undefined): Observable<FaturaModel> {
        console.log(invoice);
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

    successPayment(invoice: FaturaModel):Observable<FaturaModel>
    {
        return this.http.put<FaturaModel>(this.url, invoice, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    failPayment(invoice: FaturaModel):Observable<FaturaModel>
    {
        return this.http.put<FaturaModel>(this.url, invoice, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    provisionPayment(invoice: FaturaModel):Observable<FaturaModel>
    {
        return this.http.put<FaturaModel>(this.url, invoice, httpOptions)
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