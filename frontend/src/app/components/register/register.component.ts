import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User = new User();
    passwordError: string = '';
  constructor(private _cabinetService: UserService,private _router :Router,private _activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    const isIdPresent =this._activatedRoute.snapshot.paramMap.has('id');
    if(isIdPresent){
     const id = +this._activatedRoute.snapshot.paramMap.get('id')!;
      this._cabinetService.getuser(id).subscribe(
        data=>this.user = data
      )
    }
  }
  saveUser() {
    let passwordError = "";
  
    if (!this.user.username) {
      passwordError = "Le nom d'utilisateur est obligatoire.";
    } else if (!this.user.email) {
      passwordError = "L'adresse email est obligatoire.";
    } else if (!this.user.password) {
      passwordError = "Le mot de passe est obligatoire.";
    } else if (!this.user.password2) {
      passwordError = "La confirmation de mot de passe est obligatoire.";
    }
  
    if (!passwordError && !this.user.email.includes('@')) {
      passwordError = "L'adresse email est invalide.";
    } else {
      this._cabinetService.getUsers().subscribe(users => {
        if (users.some(user => user.email === this.user.email)) {
          passwordError = "Cet e-mail est déjà enregistré.";
        } else if (this.user.password !== this.user.password2) {
          passwordError = "Les mots de passe ne correspondent pas.";
        }
  
        if (passwordError) {
          this.passwordError = passwordError;
          return;
        }
  
        this._cabinetService.saveUser(this.user).subscribe(data => {
          console.log("response", data);
          this._router.navigateByUrl("/user");
        });
      });
    }
  }
  
 
  }

 
  
  
