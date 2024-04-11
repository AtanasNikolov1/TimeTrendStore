import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { User } from 'src/app/core/interfaces/user.interface';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  user$!: Observable<User | undefined>;
  errorMessage!: string | undefined;
  loading: boolean = true;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.user$ = this.accountService.getUserId().pipe(
      tap((user) => {
        console.log(user);
        this.loading = false;
      }),
      catchError((error) => {
        console.log('Error fetching user data:', error);
        this.errorMessage = 'Error fetching user data';
        return throwError(this.errorMessage);
      }),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
