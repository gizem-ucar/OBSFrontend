import { Component, OnInit } from '@angular/core';
import { Bolum } from 'src/app/models/bolum';
import { BolumDetayDto } from 'src/app/models/detayModels/bolumDetayDto';
import { BolumService } from 'src/app/services/bolum.service';

@Component({
  selector: 'app-idareci-bolum-listesi',
  templateUrl: './idareci-bolum-listesi.component.html',
  styleUrls: ['./idareci-bolum-listesi.component.css']
})
export class IdareciBolumListesiComponent implements OnInit {
  bolumler: BolumDetayDto[] = [];

  constructor(private bolumService: BolumService) { }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.bolumService.getDetails().subscribe(response => {
      this.bolumler = response.data
    })
  }
}
