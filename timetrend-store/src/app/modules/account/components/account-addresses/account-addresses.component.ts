import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { User } from 'src/app/core/interfaces/user.interface';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-account-addresses',
  templateUrl: './account-addresses.component.html',
  styleUrls: ['./account-addresses.component.css'],
})
export class AccountAddressesComponent {
  user$!: Observable<User | undefined>;
  errorMessage!: string | undefined;
  loading: boolean = true;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.user$ = this.accountService.getUserId().pipe(
      tap((user) => {
        this.loading = false;
      }),
      catchError((error) => {
        console.log('Error fetching the addresses:', error);
        this.errorMessage = 'Error fetching the addresses';
        return throwError(this.errorMessage);
      }),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
