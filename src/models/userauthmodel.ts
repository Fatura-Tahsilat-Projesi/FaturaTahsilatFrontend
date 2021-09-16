export class User {
    
    constructor(
        public email: string | undefined | any,
        public id: string | undefined | any,
        private _token: string | number | boolean | any,
        private _tokenExpirationDate: Date | any,
        private _tmpExpiration?: Date | any
        ) {}

    get token3() {
        // if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
        //     console.log("token3 => "+this._tokenExpirationDate);
        //     return null;
        // }
        this._tmpExpiration = localStorage.getItem('accessTokenExpiration');
        if(!localStorage.getItem('accessTokenExpiration') || new Date() > this._tmpExpiration) {
            //console.log("token3 => "+this._tokenExpirationDate);
            console.log("accessTokenExpiration => "+localStorage.getItem('accessTokenExpiration'));
            localStorage.removeItem('accessToken');
            localStorage.removeItem('accessTokenExpiration');

            return null;
        }
        console.log("accessTokenExpiration => "+localStorage.getItem('accessTokenExpiration'));
        //console.log("_tokenExpirationDate => "+this._tokenExpirationDate);
        return this._token;
    }

}