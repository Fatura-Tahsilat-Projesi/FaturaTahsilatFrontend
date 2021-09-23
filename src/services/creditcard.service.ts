import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { CreditCardModel } from "src/models/creditcardmodel";
import { CreditCardData } from "src/modules/data/creditcarddata";

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    })
};


@Injectable()
export class CreditCardService
{
    url = "https://localhost:44389/api/creditCards/";

    constructor(private http: HttpClient) {}

    getAllCards():Observable<CreditCardData[]>
    {
        return this.http.get<CreditCardData[]>(this.url)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    getCreditCardById(id: number): Observable<CreditCardData> {
        return this.http.get<CreditCardData>(this.url + id)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    createCreditCard(creditCardInformation: CreditCardModel): Observable<CreditCardModel>
    {
        return this.http.post<CreditCardModel>(this.url, creditCardInformation, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        )
    }


    updateCreditCard(creditCardInformation: CreditCardModel): Observable<CreditCardModel> {
        return this.http.put<CreditCardModel>(this.url, creditCardInformation, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }


    deleteCreditCard(id: number): Observable<unknown>
    {
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