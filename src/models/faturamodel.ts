export class FaturaModel {
    
    name: string | undefined;
    tutar: number | undefined;
    kdvsizTutar: number | undefined;
    categoryId: number | undefined;
    

    constructor(name: string, tutar:number, kdvsizTutar:number, categoryId: number){
        this.name = name;
        this.tutar = tutar;
        this.kdvsizTutar = kdvsizTutar;
        this.categoryId = categoryId;
    };
}