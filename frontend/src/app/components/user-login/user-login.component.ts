import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(

    private router: Router, 
    private userService: UserService) {}

    onSubmit(): void {
      if (!this.email || !this.password) {
        this.errorMessage = "Veuillez remplir tous les champs.";
        return;
      }
    
      this.userService.getUsers().subscribe(users => {
        const user = users.find(u => u.email === this.email && u.password === this.password);
        if (user) {
          this.router.navigate(['/cabinets']);
        } else {
          // vérifier si l'email ou le mot de passe est incorrect
          const emailExists = users.some(u => u.email === this.email);
          const passwordExists = users.some(u => u.password === this.password);
          if (emailExists && !passwordExists) {
            this.errorMessage = "Mot de passe incorrect";
          } else if (!emailExists && passwordExists) {
            this.errorMessage = "Email incorrect";
          } else {
            this.errorMessage = "Email et mot de passe incorrectes";
          }
        }
      });
    }
    
}
