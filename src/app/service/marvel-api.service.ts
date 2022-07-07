import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  constructor(private http: HttpClient) {}


  BaseUrl =
    'http://gateway.marvel.com/v1/public/characters?limit=100&offset=0&ts=1656708845&apikey=efd0651b5824c656d49c56355087f787&hash=db23dbe90e05ad622078226443d5cdb7';

  allCharacters(): Observable<any> {
    return this.http.get(this.BaseUrl);
  }

  allComics(): Observable<any> {
    const comicUrl =
      'http://gateway.marvel.com/v1/public/comics?limit=100&ts=1656708845&apikey=efd0651b5824c656d49c56355087f787&hash=db23dbe90e05ad622078226443d5cdb7';
    return this.http.get(comicUrl);
  }

  allSeries(): Observable<any> {
    const seriesUrl =
      'http://gateway.marvel.com/v1/public/series?limit=100&ts=1656708845&apikey=efd0651b5824c656d49c56355087f787&hash=db23dbe90e05ad622078226443d5cdb7';
    return this.http.get(seriesUrl);
  }

  getComicsByCharacter(characterId: string): Observable<any> {
    const comicByCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1656708845&apikey=efd0651b5824c656d49c56355087f787&hash=db23dbe90e05ad622078226443d5cdb7`;
    return this.http.get(comicByCharacterUrl);
  }
  getSeriesByCharacter(characterId: string): Observable<any> {
    const comicByCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/series?ts=1656708845&apikey=efd0651b5824c656d49c56355087f787&hash=db23dbe90e05ad622078226443d5cdb7`;
    return this.http.get(comicByCharacterUrl);
  }

  getCharacterByName(characterName: string): Observable<any> {
    const characterBYNameUrl = `http://gateway.marvel.com/v1/public/characters?name=${characterName}&ts=1656708845&apikey=efd0651b5824c656d49c56355087f787&hash=db23dbe90e05ad622078226443d5cdb7`;
    return this.http.get(characterBYNameUrl);
  }
}
