import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { GlobalVariable } from "src/global/global-variable";
import { AuthResponse } from "src/models/AuthResponse";
import { RoleModel } from "src/models/rolemodel";
import { User } from "src/models/userauthmodel";
import { AspUserData } from "src/modules/data/aspuser.data";
import { RolesData } from "src/modules/data/roles.data";
import { SignupuserModel } from '../models/signupusermodel';
const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html, application/xhtml+xml, */*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',

    })
};



@Injectable({
    providedIn: 'root',
})

export class AuthService {
    url = GlobalVariable.backendUrl +"api/auth/";
    token2: any;

    email: any;
    id: any;
    _token: any;
    _tokenExpirationDate: any;
    userTmp = new User(null, null, null, null) ;
    user = new BehaviorSubject<User>(this.userTmp);
    responseUser: any = {};
    username: string | undefined;
    



    constructor(private http: HttpClient) {}

    authenticate(email: string, password: string): Observable<boolean> {
        return this.http.post<any>(this.url + 'CreateToken', {
            email: email,
            password: password
        }).pipe(map(response => {
            this.token2 = response.success  ? response.token : null;
            console.log(response);
            console.log(this.token2);
            return response.success;
        }));
    }

    createUser(user: SignupuserModel): Observable<SignupuserModel> {
        return this.http.post<SignupuserModel>(this.url + 'CreateUser', user, httpOptions)
        .pipe(
            //tap(data => console.log(data)),
            tap(response => {
                const user = new User(
                    response.email,
                    response.id,
                    response.accessToken,
                    response.accessTokenExpiration
                );
                this.user.next(user);
            }),
            catchError(this.handleError)
        );
    }

    createRole(role: RoleModel): Observable<RoleModel> {
        return this.http.post<RoleModel>(this.url + 'CreateRole', role, httpOptions)
        .pipe(
            tap(response => {
            console.log("response => "+response);
            })
        )
    }

    userData: any = {};
    

    getAllAspUser():Observable<AspUserData[]>
    {
        return this.http.get<AspUserData[]>(this.url+ "GetAllUser")
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }


    getAspUserById(id: string | null): Observable<AspUserData> 
    {
        return this.http.post<AspUserData>(this.url + "GetByIdUser",{ id: id})
        .pipe(
            tap(data => data),
            catchError(this.handleError)
        );
    }

    getRoles():Observable<RolesData[]> {
        return this.http.get<RolesData[]>(this.url + "GetRoles")
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    getAspUserRoleById(id: string | null): Observable<AspUserData> 
    {
        return this.http.post<AspUserData>(this.url + "GetByIdUserRole",{ id: id})
        .pipe(
            tap(data => data),
            catchError(this.handleError)
        );
    }
    
    deleteUser(id: string | null): Observable<AspUserData>
    {
        return this.http.post<AspUserData>(this.url + 'RemoveUser/', {id: id })
        .pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
        
    }

    signUp(username: string, email: string, password: string) {
        return this.http.post<AuthResponse>(this.url + '', {username: username, email: email, password: password, returnSecureToken: true}, httpOptions)
        .pipe(
            tap(response => {
                const user = new User(
                    response.email,
                    response.id,
                    response.accessToken,
                    response.accessTokenExpiration
                );
                this.user.next(user);
            })
        );
    }

    

    signIn(email: string, password: string) {
        return this.http.post<AuthResponse>(this.url + 'CreateToken', {email: email, password: password}, httpOptions)
        .pipe(
            tap(
                response => {
                    this.userData = response;
                    const user = new User(
                        this.userData.data.email,
                        this.userData.data.id,
                        this.userData.data.accessToken,
                        this.userData.data.accessTokenExpiration
                    );
                    this.setToken(this.userData.data.accessToken,this.userData.data.accessTokenExpiration,this.userData.data.userIdValue);
                    // this.aspUserService.getUserById(this.userData.data.userIdValue).subscribe( data => {
                    //     this.responseUser = data;
                    //     data = this.responseUser.data;
                    //     this.username = data.userName;
                    //     this.setUsernameStorage(<any>data.userName);
                    //     console.log("responseUser => "+this.responseUser);
                    // });
                    this.user.next(user);
                }),
            catchError(this.handleError)
        );
    }

    logout() {
        this.user.next(this.userTmp);
        localStorage.removeItem('accessToken');
        localStorage.clear();
    }


    setToken(token: string, accessTokenExpiration: string, id:string)
    {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('accessTokenExpiration', accessTokenExpiration);
        localStorage.setItem('id', id);
    }
    setUsernameStorage(username: string)
    {
        localStorage.setItem('username', username);
    }

    getToken() {
        return localStorage.getItem('accessToken');
    }
    getTokenExpiration() {
        return localStorage.getItem('accessTokenExpiration');
    }
    // TODO => bak??lacak hata var!
    get authenticated(): boolean {
        return this.token2 != null;
    }

    clear() {
        this.token2 = null;
    }


    private handleError(error: HttpErrorResponse) {
        let message = "HandleError Hata Olu??tu!";
        console.log("error => "+JSON.stringify(error));
        if(!navigator.onLine)
        {
            message = "??evrimd?????? G??z??k??yorsunuz. L??tfen ??nternet Ba??lant??n??z?? Kontrol Edin!";
            return throwError(message);
        }

        if(error.error) {
            console.log("error.error => "+error.error);
            switch (error.error.error.errors[0])
            {
              case "Email or Password is wrong":
                message = "Eposta Adresiniz veya Parolan??z Hatal??!";
                break;
              case "Passwords must have at least one uppercase ('A'-'Z').":
                message = "Parolalarda en az bir b??y??k harf ('A'-'Z') olmal??d??r. ";
                break;
              case "Username is already taken.":
                message = "Kullan??c?? ad?? daha ??nceden al??nm????!";
                break;
              default:
                message = 'L??tfen Bilgileri Eksiksiz Olarak Giriniz!1';
            }
          }

        return throwError(message);
    }

}
