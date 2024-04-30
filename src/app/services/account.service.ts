import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";import { Account } from "@/types";
import { environment } from "@/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  readonly API_URL = environment.apiUrl;
  readonly account = signal<Account | null>(null);

  constructor(private httpClient: HttpClient) {}

  getUserData(userId = 1) {
    return this.httpClient.get<Account>(
      this.API_URL + "/account/get-user-data/" + userId,
      {
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
  }
}
