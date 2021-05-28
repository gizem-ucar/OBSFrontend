import { Component, OnInit } from '@angular/core';
import { AkademisyenDetayDto } from 'src/app/models/detayModels/akademisyenDetayDto';
import { Akademisyen } from 'src/app/models/kullaniciModels/akademisyen';
import { AkademisyenService } from 'src/app/services/akademisyen.service';

@Component({
  selector: 'app-idareci-akademisyen-listesi',
  templateUrl: './idareci-akademisyen-listesi.component.html',
  styleUrls: ['./idareci-akademisyen-listesi.component.css']
})
export class IdareciAkademisyenListesiComponent implements OnInit {
  akademisyenler: AkademisyenDetayDto[]=[];

  constructor(private akademisyenService: AkademisyenService) { }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.akademisyenService.getDetails().subscribe(response => {
      this.akademisyenler = response.data
    })
  }
}
