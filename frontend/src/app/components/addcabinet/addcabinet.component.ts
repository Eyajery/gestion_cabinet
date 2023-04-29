import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cabinet } from 'src/app/models/cabinet';
import { CabinetService } from 'src/app/services/cabinet.service';

@Component({
  selector: 'app-addcabinet',
  templateUrl: './addcabinet.component.html',
  styleUrls: ['./addcabinet.component.css']
})
export class AddcabinetComponent implements OnInit {
  cabinet: Cabinet = new Cabinet();
constructor(private _cabinetService: CabinetService,private _router :Router,private _activatedRoute:ActivatedRoute){}
ngOnInit(): void {
  const isIdPresent =this._activatedRoute.snapshot.paramMap.has('id');
  if(isIdPresent){
   const id = +this._activatedRoute.snapshot.paramMap.get('id')!;
    this._cabinetService.getCabinet(id).subscribe(
      data=>this.cabinet = data
    )
  }
}
saveCabinet(){
  this._cabinetService.saveCabinet(this.cabinet).subscribe(data=>{
    console.log('response',data);
    this._router.navigateByUrl("/cabinets");
  })

}
deleteCabinet(id: number){
  this._cabinetService.deleteCabinet(id).subscribe(
data => {
  console.log('deleted response',data);
  this._router.navigateByUrl('/cabinets');
}
  )
  

}
printForm() {
  window.print();
}
}
