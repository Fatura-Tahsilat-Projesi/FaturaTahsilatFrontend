export class FaturaModel {
    invoiceNu: number | undefined;
    name: string | undefined;
    total: number | undefined;
    totalVat: number | undefined;
    excludingVat: number | undefined;
    dueDate: Date | undefined;
    isComplete: number | undefined;
    invoiceType: number | undefined;
    statusCode: number | undefined;
    companyId: number | undefined;
    userId: number | undefined;

    constructor(invoiceNu:number, name: string, total:number, totalVat:number, excludingVat:number, isComplete:number, invoiceType: number, statusCode: number, companyId: number, userId: number){
        this.invoiceNu = invoiceNu;
        this.name = name;
        this.total = total;
        this.totalVat = totalVat;
        this.excludingVat = excludingVat;
        //this.excludingVat = total - totalVat;
        this.isComplete = isComplete;
        this.invoiceType = invoiceType;
        this.statusCode = statusCode;
        this.invoiceType = invoiceType;
        this.companyId = companyId;
        this.userId = userId;
    };
}