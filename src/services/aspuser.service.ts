import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { GlobalVariable } from "src/global/global-variable";
import { AspUserModel } from "src/models/aspusermodel";
import { AspUserData } from "src/modules/data/aspuser.data";



const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class AspUserService {
    url = GlobalVariable.backendUrl +"api/auth/";

    constructor(private http: HttpClient) {}



    getAllUser():Observable<AspUserData[]>
    {
        return this.http.get<AspUserData[]>(this.url+'GetAllUser')
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        ); 
    }


    getUserById(id: number): Observable<AspUserModel> 
    {
        return this.http.get<AspUserModel>(this.url + id)
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