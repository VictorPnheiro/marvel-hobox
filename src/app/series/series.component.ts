import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(private service: MarvelApiService) {}

  allSeries: any = [];

  ngOnInit(): void {
    this.service.allSeries().subscribe((result) => {
      console.log(result);
      this.allSeries = result.data.results;
    });
  }
}
