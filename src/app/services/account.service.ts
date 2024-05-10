import { Injectable } from "@angular/core";
import { environment } from "@/environments/environment";
import { APIResponse, Account, CardData, Transaction, User } from "@/types";
import { BehaviorSubject } from "rxjs";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  readonly API_URL = environment.apiUrl;
  private readonly _account = new BehaviorSubject<Account | null>(null);

  constructor() {}

  getAcount() {
    return this._account.asObservable();
  }

  setAccount(account: Account | null) {
    this._account.next(account);
  }

  getUserData(token: string) {
    return axios.get<APIResponse<Account>>(
      this.API_URL + "/account/get-user-data",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  }

  getCardsData(virtualTapCashId: string, token: string) {
    return axios.get<APIResponse<CardData[]>>(
      this.API_URL + "/card/get-cards-data/" + virtualTapCashId,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  }

  getTransactions(cardId: string, virtualTapCashId: string, token: string) {
    const url =
      this.API_URL +
      "/transaction/get-transaction-data/account/" +
      virtualTapCashId +
      "/card/" +
      cardId;

    return axios.get<APIResponse<Transaction[]>>(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      data: {
        cardId,
        virtualTapCashId,
      },
    });
  }
}
