import { Component, OnInit } from '@angular/core';
import { OgrenciDetayDto } from 'src/app/models/detayModels/ogrenciDetayDto';
import { Ogrenci } from 'src/app/models/kullaniciModels/ogrenci';
import { OgrenciForRegisterDto } from 'src/app/models/kullaniciModels/RegisterModels/ogrenciForRegisterDto';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { OgrenciService } from 'src/app/services/ogrenci.service';

@Component({
  selector: 'app-idareci-ogrenci-listesi',
  templateUrl: './idareci-ogrenci-listesi.component.html',
  styleUrls: ['./idareci-ogrenci-listesi.component.css']
})
export class IdareciOgrenciListesiComponent implements OnInit {

  ogrenciler:OgrenciDetayDto[] = [];

  constructor(private ogrenciService: OgrenciService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.ogrenciService.getDetails().subscribe(response => {
      this.ogrenciler = response.data
    })
  }
}
