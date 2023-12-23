import { Customer, User } from "./Models/Models";

export interface LoginResponse {
    user: User;
    token: string;
}


export interface ActionResult {
    success: boolean;
    errorMessage: string;
}

export interface APIResponseLogin extends ActionResult {
    data: LoginResponse;
}

export interface APIResponseOpenNewCurrentAccount extends ActionResult {
}

export interface APIResponseSubmitCustomerAsync extends ActionResult {
    data: Customer;
}

export interface APIResponseGetCustomersByEntryUserIdAdvancedAsync extends ActionResult {
    data: Customer[];
}

export interface APIResponseGetCustomerByIdAdvancedAsync extends ActionResult {
    data: Customer;
}
