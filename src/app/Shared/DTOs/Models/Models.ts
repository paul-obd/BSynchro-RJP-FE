
export interface Account {
  accountId: number;
  customerId: number;
  balance: number;
  entryUserId: number;
  createdDate: Date;
  customer: Customer;
  entryUser: User;
  transactions: Transaction[];
}

export interface Customer {
  customerId: number;
  firstName?: string | null;
  lastName?: string | null;
  entryUserId: number;
  createdDate: Date;
  entryUser: User;
  accounts: Account[];
}

export interface Transaction {
  transactionId: number;
  accountId: number;
  amount: number;
  transactiontypeId: number;
  entryUserId: number;
  createdDate: Date;
  account: Account;
  entryUser: User;
  transactiontype: TransactionType;
}

export interface TransactionType {
  transactiontypeId: number;
  value: string | null;
  entryUserId: number;
  createdDate: Date;
  entryUser: User;
  transactions: Transaction[];
}

export interface User {
  userId: number;
  username: string;
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  createdDate: Date;
  accounts: Account[];
  customers: Customer[];
  transactionTypes: TransactionType[];
  transactions: Transaction[];
}
