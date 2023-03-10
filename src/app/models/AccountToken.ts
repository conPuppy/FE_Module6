import {Role} from "./Role";

export class AccountToken {
    username: string;
    token: string;

    roles: Role[];

    constructor(username: string, token: string, roles: Role[]) {
        this.username = username;
        this.token = token;
        this.roles = roles;
    }
}