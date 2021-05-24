import { Component, OnInit } from '@angular/core';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { Ogrenci } from 'src/app/models/kullaniciModels/ogrenci';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-ogrenci-listesi',
  templateUrl: './ogrenci-listesi.component.html',
  styleUrls: ['./ogrenci-listesi.component.css']
})
export class OgrenciListesiComponent implements OnInit {
  ogrenciler:Ogrenci[]=[];
  ogrenciDto:OgrenciDetayDto[]=[];
  currentOgrenci : Ogrenci;

  constructor(private ogrenciService:OgrenciService) { }

  ngOnInit(): void {
    this.getall();
  }
  
  getall(){
    this.ogrenciService.getall().subscribe(response=>{
      this.ogrenciler=response.data
    })
  }

  setCurrentOgrenci(ogrenci:Ogrenci){
    this.currentOgrenci = ogrenci;
  }

  getCurrentOgrenciClass(ogrenci:Ogrenci){
    if (ogrenci == this.currentOgrenci) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllOgrenciClass(){
    if (!this.currentOgrenci) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
