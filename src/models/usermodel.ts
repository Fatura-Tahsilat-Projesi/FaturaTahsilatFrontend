export class UserModel {
    id: number | undefined;
    userName: string | undefined;
    name: string | undefined;
    surname: string | undefined;
    authorization: number | undefined;
    tcNu: number | undefined;
    address: string | undefined;
    phoneNu: string | undefined;
    mail: string | undefined;
    iban: number | undefined;
    createdAt: Date | undefined;

    

    constructor(userName:string, name:string, surname:string, authorization: number, tcNu: number, address:string, phoneNu:string, mail:string, iban: number, createdAt: Date){
        this.userName = userName;
        this.name = name;
        this.surname = surname;
        this.authorization = authorization;
        this.tcNu = tcNu;
        this.address = address;
        this.phoneNu = phoneNu;
        this.mail = mail;
        this.iban = iban;
        this.createdAt = createdAt;
    };
}