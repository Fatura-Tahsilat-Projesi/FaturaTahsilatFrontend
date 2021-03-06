import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { GlobalVariable } from "src/global/global-variable";
import { UserModel } from "src/models/usermodel";
import { UserData } from "src/modules/data/userData";
const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class UserService
{
    url = GlobalVariable.backendUrl +"api/users/";

    constructor(private http: HttpClient) {}

    getAllUser():Observable<UserData[]>
    {
        return this.http.get<UserData[]>(this.url)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        ); 
    }

    getUserById(id: number): Observable<UserData> 
    {
        return this.http.get<UserData>(this.url + id)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }


    createUser(user: UserModel):Observable<UserModel>
    {
        return this.http.post<UserModel>(this.url, user, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    updateUser(user: UserModel): Observable<UserModel>
    {
        return this.http.put<UserModel>(this.url, user, httpOptions)
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }


    deleteUser(id: number): Observable<unknown>
    {
        return this.http.delete(this.url + id, httpOptions) 
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }


    private handleError(error: HttpErrorResponse) {

        if(error.error instanceof ErrorEvent) {
            //Client veya Network Tarafl??
            console.log("Error: "+ error.error.message);
        } else {
            //Backend Tarafl??
            console.log("Error else: "+ error.status);
            //!TODO ileride mesajlar d??zenlenmesi gerekiyor.
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

        return throwError("Bir hata olu??tu!");
    }

}