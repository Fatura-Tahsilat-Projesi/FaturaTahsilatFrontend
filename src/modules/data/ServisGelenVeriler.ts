export class ServisGelenVeriler {
    invoiceId:number | undefined;
    invoiceNu:number | undefined;
    name:string="";
    total: number | undefined;
    totalVat: number | undefined;
    excludingVat: number | undefined;
    dueDate: Date | undefined;
    invoiceType:number | undefined;
    statusCode:number | undefined;
    isComplete:number | undefined;
    companyId:number | undefined;
    userId:string | undefined;
    //kdvsizTutar: number | undefined;
    //categoryId: number | undefined;
    //icerik: string | undefined;
    //odendi: boolean | undefined;
}