import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // !Login functionality
  login(email: string, password: string): void {
    from(this.fireauth.signInWithEmailAndPassword(email, password)).subscribe(
      (userCredential) => {
        if (userCredential && userCredential.user) {
          const userId = userCredential.user.uid;
          localStorage.setItem('token', userId);
          this.router.navigate(['account']);
        } else {
          alert('User credential is null');
        }
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  // !Registration functionality
  register(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string
  ): void {
    from(
      this.fireauth.createUserWithEmailAndPassword(email, password)
    ).subscribe(
      async (userCredential) => {
        const userId = userCredential.user?.uid;

        if (!userId) {
          console.error('User ID is undefined');
          this.router.navigate(['/register']);
          return;
        }

        try {
          await this.createUserData(
            userId,
            firstName,
            lastName,
            phoneNumber,
            email
          );
          alert('Registration Successful');
          this.router.navigate(['/login']);
        } catch (error) {
          console.error('Error creating user document: ', error);
          alert('Error creating user document');
          this.router.navigate(['/register']);
        }
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  // Create user data
  private createUserData(
    userId: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
  ) {
    return this.firestore.collection('users').doc(userId).set({
      firstName,
      lastName,
      phoneNumber,
      email,
      addresses: [],
      cart: [],
    });
  }

  // !Logout functionality
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  // !Checking if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
