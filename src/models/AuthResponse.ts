export class AuthResponse {
    accessToken: string;
    accessTokenExpiration: Date;
    refreshToken: string;
    refreshTokenExpiration: Date;
    email?: string;
    city?: string;
    id?: string;
    userName?: string;
    expiresIn?: string;
    localId?: string;
    registered?: string;

    

    constructor(accessToken:string, accessTokenExpiration: Date, refreshToken:string, refreshTokenExpiration:Date){
        this.accessToken = accessToken;
        this.accessTokenExpiration = accessTokenExpiration;
        this.refreshToken = refreshToken;
        this.refreshTokenExpiration = refreshTokenExpiration;
    };
}


/*

export interface AuthResponse {
    accessToken: string;
    accessTokenExpiration: Date;
    refreshToken: string;
    refreshTokenExpiration: Date;
    email?: string;
    city?: string;
    id?: string;
    userName?: string;
    expiresIn?: string;
    localId?: string;
    registered?: string;

}


*/