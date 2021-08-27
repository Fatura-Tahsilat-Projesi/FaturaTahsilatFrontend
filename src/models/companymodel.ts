export class CompanyModel {
    // id: number | undefined;
    name: string | undefined;
    category: number | undefined;
    companyCode: number | undefined;

    

    constructor(name:string, category: number, companyCode:number){
        this.name = name;
        this.category = category;
        this.companyCode = companyCode;
    };
}