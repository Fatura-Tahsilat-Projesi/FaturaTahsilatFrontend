import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { GlobalVariable } from "src/global/global-variable";
import { CompanyModel } from "src/models/companymodel";
import { CompanyData } from "src/modules/data/companyData";

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    })
};


@Injectable()
export class CompanyService
{
    url = GlobalVariable.backendUrl +"api/companies/";

    constructor(private http: HttpClient) {}

    getAllCompany():Observable<CompanyData[]>
    {
        return this.http.get<CompanyData[]>(this.url)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    getCompanyById(id: number): Observable<CompanyData> {
        return this.http.get<CompanyData>(this.url + id)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    createCompany(company: CompanyModel): Observable<CompanyModel>
    {
        return this.http.post<CompanyModel>(this.url, company, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        )
    }


    updateCompany(company: CompanyModel): Observable<CompanyModel> {
        return this.http.put<CompanyModel>(this.url, company, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }


    deleteCompany(id: number): Observable<unknown>
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