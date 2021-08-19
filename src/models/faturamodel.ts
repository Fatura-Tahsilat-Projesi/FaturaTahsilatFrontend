export class FaturaModel {
    
    name: string | undefined;
    tutar: number | undefined;
    kdvsiztutar: number | undefined;
    categoryId: number | undefined;
    

    constructor(name: string, tutar:number, kdvsiztutar:number, categoryId: number){
        this.name = name;
        this.tutar = tutar;
        this.kdvsiztutar = kdvsiztutar;
        this.categoryId = categoryId;
    };
}