export class UserModel {
    // id: number | undefined;
    userName: string | undefined;
    name: string | undefined;
    surname: string | undefined;
    authorization: number | undefined;
    tcNu: number | undefined;
    address: string | undefined;
    phoneNu: string | undefined;
    email: string | undefined;
    iban: number | undefined;
    createdAt: Date | undefined;

    

    constructor(userName:string, name:string, surname:string, authorization: number, tcNu: number, address:string, phoneNu:string, email:string, iban: number, createdAt: Date){
        this.userName = userName;
        this.name = name;
        this.surname = surname;
        this.authorization = authorization;
        this.tcNu = tcNu;
        this.address = address;
        this.phoneNu = phoneNu;
        this.email = email;
        this.iban = iban;
        this.createdAt = createdAt;
    };
}