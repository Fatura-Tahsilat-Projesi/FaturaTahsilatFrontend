export class User {
    
    constructor(
        public email: string | undefined | any,
        public id: string | undefined | any,
        private _token: string | number | boolean | any,
        private _tokenExpirationDate: Date | any) {}

    get token3() {
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            //console.log("token3 => "+this._tokenExpirationDate);
            return null;
        }
        //console.log("_tokenExpirationDate => "+this._tokenExpirationDate);
        return this._token;
    }

}