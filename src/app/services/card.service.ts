import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@/environments/environment";
import { Account } from "@/types";

@Injectable({
  providedIn: "root",
})
export class CardService {
  readonly API_URL = environment.apiUrl;
  readonly account = signal<Account | null>(null);

  constructor(private httpClient: HttpClient) {}

  // getUserData() {
  //   return this.httpClient.get<Account>(
  //     this.API_URL + "/account/get-user-data/"
  //     {
  //       headers: {
  //         Accept: "application/json",
  //         "ngrok-skip-browser-warning": "true",
  //         Authorization:
  //       }
  //     }
  //   );
  // }
}
