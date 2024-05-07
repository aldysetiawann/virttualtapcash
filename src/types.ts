type SuccessResponse<T> = {
  status: "success";
  data: T;
  message?: string;
};

type ErrorResponse = {
  status: "error";
  data: null;
  message: string;
};

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface User {
  id: string;
  username: string;
  name: string;
  phone: string;
}

export interface Account {
  userId: number;
  username: string;
  virtualTapCashId: string;
  pin: string;
  customerName: string;
  accountNumber: string;
  bankAccountBalance: number;
  role: string;
}

export interface CardData {
  cardId: string;
  rfid: string;
  cardName: string;
  tapCashBalance: number;
  isDefault: boolean;
  registeredAt: string;
  updatedAt: string;
  status: string;
}

export interface Transaction {
  transactionId: number;
  type: "TOPUP" | "WITHDRAW" | "PAYMENT";
  nominal: number;
  createdAt: string;
}
