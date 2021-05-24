import { Component, OnInit } from '@angular/core';
import { Ders } from 'src/app/models/ders';
import { DersDetayDto } from 'src/app/models/detayModels/dersDetayDto';
import { DersService } from 'src/app/services/ders.service';

@Component({
  selector: 'app-ders-listesi',
  templateUrl: './ders-listesi.component.html',
  styleUrls: ['./ders-listesi.component.css']
})
export class DersListesiComponent implements OnInit {

  dersler:Ders[]=[];
  dersDto:DersDetayDto[]=[];
  currentDers : Ders;

  constructor(private dersService:DersService) { }

  ngOnInit(): void {
    this.getall();
  }
  
  getall(){
    this.dersService.getall().subscribe(response=>{
      this.dersler=response.data
    })
  }

  setCurrentDers(ders:Ders){
    this.currentDers = ders;
  }

  getCurrentDersClass(ders:Ders){
    if (ders == this.currentDers) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllDersClass(){
    if (!this.currentDers) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
