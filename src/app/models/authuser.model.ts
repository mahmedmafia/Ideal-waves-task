export class Authuser {
    id: number;
    name: string;
    role: Role;
    password: string;
    constructor(id: number, name: string, password: string, role: Role) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.password = password;
    }
}
export enum Role {
    Admin = 1,
    user = 0,
}
