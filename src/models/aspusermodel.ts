export class AspUserModel {
    id: string | undefined;
    city?: string | undefined;
    userName: string | undefined;
    NormalizedUserName: string | undefined;
    email: string | undefined;
    NormalizedEmail: string | undefined;
    EmailConfirmed: boolean | undefined;
    PasswordHash: string | undefined;
    SecurityStamp: string | undefined;
    ConcurrencyStamp: string | undefined;
    PhoneNumber?: string | undefined;
    PhoneNumberConfirmed: boolean | undefined;
    TwoFactorEnabled: boolean | undefined;
    LockoutEnd?: Date | undefined;
    LockoutEnabled: boolean | undefined;
    AccessFailedCount: number | undefined;

    constructor(id:string, userName:string, NormalizedUserName:string, Email:string, NormalizedEmail:string,EmailConfirmed:boolean,PasswordHash:string,SecurityStamp:string,ConcurrencyStamp:string,PhoneNumberConfirmed:boolean,TwoFactorEnabled:boolean,LockoutEnabled:boolean,AccessFailedCount:number) {
        this.id =id;
        this.userName = userName;
        this.NormalizedUserName = NormalizedUserName;
        this.email = Email;
        this.NormalizedEmail = NormalizedEmail;
        this.EmailConfirmed = EmailConfirmed;
        this.PasswordHash = PasswordHash;
        this.SecurityStamp = SecurityStamp;
        this.ConcurrencyStamp = ConcurrencyStamp;
        this.PhoneNumberConfirmed = PhoneNumberConfirmed;
        this.TwoFactorEnabled = TwoFactorEnabled;
        this.LockoutEnabled = LockoutEnabled;
        this.AccessFailedCount = AccessFailedCount;
    }


}