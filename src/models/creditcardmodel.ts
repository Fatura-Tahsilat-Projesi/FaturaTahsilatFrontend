export class CreditCardModel {
    UserId: string | undefined;
    cardNumber: string | undefined;
    ExpMonth: number | undefined;
    ExpYear: number | undefined;
    cvc2: number | undefined;
    CreditCardType?: number | undefined;
    CreatedAt: Date | undefined;
    Balance: number | undefined;
    

    constructor(UserId: string, cardNumber:string, ExpMonth: number, ExpYear:number, cvc2: number, CreatedAt: Date, Balance: number){
        this.UserId = UserId;
        this.cardNumber = cardNumber;
        this.ExpMonth = ExpMonth;
        this.ExpYear = ExpYear;
        this.cvc2 = cvc2;
        //this.CreditCardType = CreditCardType;
        this.CreatedAt = CreatedAt;
        this.Balance = Balance;
    };
}