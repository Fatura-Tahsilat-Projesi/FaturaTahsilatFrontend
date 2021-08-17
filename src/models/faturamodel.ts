export class FaturaModel {
    id: number | undefined;
    faturaAd: string | undefined;
    tutar: number | undefined;
    topkdv: number | undefined;
    sontarih: number | undefined;
    icerik: string | undefined;
    odendi: boolean | undefined;

    constructor(id: number, faturaAd: string, tutar: number, topkdv: number, sontarih: number, icerik: string, odendi: boolean){
        //this.id = id;
        this.faturaAd = faturaAd;
        this.tutar = tutar;
        this.topkdv = topkdv;
        this.sontarih = sontarih;
        this.icerik = icerik;
        //this.odendi = odendi;
    };
}