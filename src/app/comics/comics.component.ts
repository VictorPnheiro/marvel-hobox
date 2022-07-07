import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../service/marvel-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  constructor(private service: MarvelApiService) {}

  allComics: any = [];

  ngOnInit(): void {
    this.service.allComics().subscribe((result) => {
      console.log(result);
      this.allComics = result.data.results;
    });
  }
}
