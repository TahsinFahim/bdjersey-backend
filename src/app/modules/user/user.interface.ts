import type { Types } from "mongoose";

export enum IsActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export enum Role{
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    USER = "USER"
}

export interface IAuthProvider {
    provider: string;  // "Google", "Credential"
    providerId: string;
}

export interface IUser{
    name: string,
    email: string,
    password: string,
    phone: string,
    picture: string,
    address: string,
    isDeleted?: string,
    isActive?: IsActive,
    role: Role,
    oders: Types.ObjectId[],
}