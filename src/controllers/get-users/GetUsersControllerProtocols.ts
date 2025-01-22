import {User} from "../../models/User";

export interface GetUsersControllerProtocols {
    handle(): any;
}

export interface GetUsersControllerProtocols {
    getUsers(): Promise<User[]>;
}