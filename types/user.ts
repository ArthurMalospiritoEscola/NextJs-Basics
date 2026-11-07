import { AccessLevel } from "@/enums/acessLevel";

export interface IUser {
    id:number;
    name:string;
    email:string;
    passwordHash:string;
    accessLevel:AccessLevel
}
