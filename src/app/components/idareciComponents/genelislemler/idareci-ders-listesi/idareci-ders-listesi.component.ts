import { Component, OnInit } from '@angular/core';
import { Ders } from 'src/app/models/ders';
import { DersDetayDto } from 'src/app/models/detayModels/dersDetayDto';
import { DersService } from 'src/app/services/ders.service';

@Component({
  selector: 'app-idareci-ders-listesi',
  templateUrl: './idareci-ders-listesi.component.html',
  styleUrls: ['./idareci-ders-listesi.component.css']
})
export class IdareciDersListesiComponent implements OnInit {
  dersler: DersDetayDto[] = [];

  constructor(private dersService: DersService) { }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.dersService.getDetails().subscribe(response => {
      this.dersler = response.data
    })
  }
}
