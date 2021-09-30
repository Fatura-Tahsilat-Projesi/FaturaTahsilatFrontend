import { InvoiceActivitiesData } from "./invoiceActivitiesData";

export class InvoiceAndActivitiesData {
    invoiceId:number | undefined;
    invoiceNu:number | undefined;
    name:string | undefined;
    total: number | undefined;
    totalVat: number | undefined;
    excludingVat: number | undefined;
    dueDate: Date | undefined;
    invoiceType:number | undefined;
    statusCode:number | undefined;
    isComplete:number | undefined;
    companyId:number | undefined;
    userId:string | undefined;
    invoiceActivities: Array<InvoiceActivitiesData> | undefined;
    //kdvsizTutar: number | undefined;
    //categoryId: number | undefined;
    //icerik: string | undefined;
    //odendi: boolean | undefined;
}