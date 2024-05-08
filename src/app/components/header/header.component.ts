import { AccountService } from "@/app/services/account.service";
import { AuthService } from "@/app/services/auth.service";
import { Account } from "@/types";
import { CommonModule } from "@angular/common";
import { Component, Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  authUser: any | null = null;
  account: Account | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.authService.getToken().subscribe((data) => {
      this.authUser = data;
    });

    this.accountService.getAcount().subscribe((data) => {
      this.account = data;
    });
  }

  logout() {
    if (!this.authService.logout()) {
      console.error("Logout failed");
    }

    this.accountService.setAccount(null);
    this.router.navigate(["/login"], {
      replaceUrl: true,
    });
  }
}
