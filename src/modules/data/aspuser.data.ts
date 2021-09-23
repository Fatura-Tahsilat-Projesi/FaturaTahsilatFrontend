export class AspUserData {
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
    phoneNumber?: string | undefined;
    PhoneNumberConfirmed: boolean | undefined;
    TwoFactorEnabled: boolean | undefined;
    LockoutEnd?: Date | undefined;
    LockoutEnabled: boolean | undefined;
    AccessFailedCount: number | undefined;
    rolName?: string | undefined;
}