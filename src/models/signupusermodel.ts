export class SignupuserModel {
    // id: number | undefined;
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    id?: string | undefined;
    accessToken?: Date | undefined;
    accessTokenExpiration?: Date | undefined;

    

    constructor(username:string, email:string, password:string){
        this.username = username;
        this.email = email;
        this.password = password;
    };

    
}