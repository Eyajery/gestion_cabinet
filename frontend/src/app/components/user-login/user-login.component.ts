import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    /*this.authService.login(this.email, this.password)
      .subscribe(
        data => {*/
          this.router.navigate(['/cabinets']);
       /* },
        error => {
          this.errorMessage = error.message;
        }
      );*/
  }
}
