export class InvoiceActivitiesModel {
    id: number | undefined;
    userId: string | undefined;
    invoiceId: number | undefined;
    companyId: number | undefined;
    transactionDate: Date | undefined;
    statusCode: number | undefined;
    

    constructor(userId:string, invoiceId: number, companyId:number, transactionDate:Date, statusCode:number){
        this.userId = userId;
        this.invoiceId = invoiceId;
        this.companyId = companyId;
        this.transactionDate = transactionDate;
        this.statusCode = statusCode;
    };
}