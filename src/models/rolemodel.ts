export class RoleModel {
    id?: string | undefined;
    name: string | undefined;
    customName: string | undefined;
    NormalizedName?: string | undefined;

    constructor(id:string, name:string, customName:string, NormalizedName:string) {
        this.id =id;
        this.name = name;
        this.customName = customName;
        this.NormalizedName = NormalizedName;
    }


}