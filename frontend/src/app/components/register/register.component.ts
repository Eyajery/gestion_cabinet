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
  saveUser(){
    this._cabinetService.saveUser(this.user).subscribe(data=>{
      console.log('response',data);
      this._router.navigateByUrl("/user");
    })
  
  }

 
  
  
}