import { Component, OnInit } from '@angular/core';
import { Bolum } from 'src/app/models/bolum';
import { BolumService } from 'src/app/services/bolum.service';

@Component({
  selector: 'app-bolum-listesi',
  templateUrl: './bolum-listesi.component.html',
  styleUrls: ['./bolum-listesi.component.css']
})
export class BolumListesiComponent implements OnInit {

  bolumler:Bolum[]=[];
  currentBolum : Bolum;

  constructor(private bolumService:BolumService) { }

  ngOnInit(): void {
    this.getall();
  }
  
  getall(){
    this.bolumService.getall().subscribe(response=>{
      this.bolumler=response.data
    })
  }

  setCurrentBolum(bolum:Bolum){
    this.currentBolum = bolum;
  }

  getCurrentBolumClass(bolum:Bolum){
    if (bolum == this.currentBolum) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllBolumClass(){
    if (!this.currentBolum) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
