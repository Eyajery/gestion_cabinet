import { Component,OnInit } from '@angular/core';
import { Cabinet } from 'src/app/models/cabinet';
import { CabinetService } from 'src/app/services/cabinet.service';

@Component({
  selector: 'app-listcabinet',
  templateUrl: './listcabinet.component.html',
  styleUrls: ['./listcabinet.component.css']
})
export class ListcabinetComponent implements OnInit {
  cabinets:Cabinet[] = [];
  filters={
    keyword: '',
    sortBy:'Name'
  }
constructor(private _cabinetService :CabinetService){}
ngOnInit(): void {
  this.ListCabinet();
}
deleteCabinet(id : number){
  this._cabinetService.deleteCabinet(id).subscribe(
    data => {
      console.log('deleted response',data);
      this.ListCabinet();
    }
  )
}
ListCabinet(){
  this._cabinetService.getCabinets().subscribe(
    data => this.cabinets = this.filterCabinet(data))
}
filterCabinet(cabinets: Cabinet[]) {
  return cabinets.filter((e) => {
    return e.name.toLowerCase().includes(this.filters.keyword.toLowerCase()) || 
           e.firstName.toLowerCase().includes(this.filters.keyword.toLowerCase()) ||
           e.age.toString().toLowerCase().includes(this.filters.keyword.toLowerCase());
  }).sort((a, b) => {
    if (this.filters.sortBy === 'name') {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA === nameB) {
        return 0;
      } else if (nameA < nameB) {
        return -1;
      } else {
        return 1;
      }
    } else if (this.filters.sortBy === 'firstName') {
      const firstNameA = a.firstName.toLowerCase();
      const firstNameB = b.firstName.toLowerCase();
      if (firstNameA === firstNameB) {
        return 0;
      } else if (firstNameA < firstNameB) {
        return -1;
      } else {
        return 1;
      }
  
    } else if (this.filters.sortBy === 'age') {
      return a.age - b.age;
    }
    return 0; // default return statement
  });
}



}
