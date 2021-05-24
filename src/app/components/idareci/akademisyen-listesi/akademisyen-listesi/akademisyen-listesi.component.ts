import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { Akademisyen } from 'src/app/models/kullaniciModels/akademisyen';
import { AkademisyenService } from 'src/app/services/akademisyen.service';

@Component({
  selector: 'app-akademisyen-listesi',
  templateUrl: './akademisyen-listesi.component.html',
  styleUrls: ['./akademisyen-listesi.component.css']
})
export class AkademisyenListesiComponent implements OnInit {

  akademisyenler:Akademisyen[]=[];
  akademisyenDto:AkademisyenDetayDto[]=[];
  currentAkademisyen : Akademisyen;

  constructor(private akademisyenService:AkademisyenService) { }

  ngOnInit(): void {
    this.getall();
  }
  
  getall(){
    this.akademisyenService.getall().subscribe(response=>{
      this.akademisyenler=response.data
    })
  }

  setCurrentAkademisyenler(akademisyen:Akademisyen){
    this.currentAkademisyen = akademisyen;
  }

  getCurrentAkademisyenClass(akademisyen:Akademisyen){
    if (akademisyen == this.currentAkademisyen) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllAkademisyenClass(){
    if (!this.currentAkademisyen) {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
