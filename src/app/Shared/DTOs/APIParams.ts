

export interface ParamsGetCustomerByIdAdvancedAsync {
    customerId: number;
}

export interface ParamsLogin {
    emailOrUsername: string;
    password: string;
}

export interface ParamsOpenNewCurrentAccount {
    customerId: number;
    initialCredit: number;
}

export interface ParamsGetTransactionTypeByValue {
    value: string;
}

export interface ParamsGetAccountByIdAsync {
    accountId: number;
}

export interface ParamsGetCustomersByEntryUserId {
    entryUserId: number;
}
