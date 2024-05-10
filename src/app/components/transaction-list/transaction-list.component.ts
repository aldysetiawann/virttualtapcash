import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableTransactionComponent } from "@/app/components/table-transaction/table-transaction.component";
import { AccountService } from "@/app/services/account.service";
import { Account } from "@/types";
import { AxiosError } from "axios";

@Component({
  selector: "transaction-list",
  standalone: true,
  templateUrl: "./transaction-list.component.html",
  imports: [CommonModule, TableTransactionComponent],
})
export class TransactionListComponent implements OnInit {
  @Input() cardId!: string;
  token: string | null = localStorage.getItem("token");
  account: Account | null = null;

  isLoading = true;
  isError = false;
  errorMessage = "";
  transactions: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    const ACCEPTED_ERROR_STATUS = [400, 404];

    this.accountService.getAcount().subscribe((data) => {
      this.account = data;

      if (data) {
        this.accountService
          .getTransactions(this.cardId, data.virtualTapCashId, this.token!)
          .then(({ data }) => {
            if (data.status === "success") {
              this.transactions = data.data;
            }
          })
          .catch((err: AxiosError) => {
            if (
              err.response?.status &&
              !ACCEPTED_ERROR_STATUS.includes(err.response.status)
            ) {
              this.isError = true;
              this.errorMessage = err.message;
              console.error(err);
            }
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    });
  }
}
