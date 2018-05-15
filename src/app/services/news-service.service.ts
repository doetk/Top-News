import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TopNewsService {
  constructor(private http: Http) {}

  getBusinessNews() {
    return this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4a5f963c043e479f8749666cc36fcc74`,
      )
      .pipe(map((res: Response) => res.json()));
  }

  getTechNews() {
    return this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4a5f963c043e479f8749666cc36fcc74`,
      )
      .pipe(map((res: Response) => res.json()));
  }
  getSportsNews() {
    return this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4a5f963c043e479f8749666cc36fcc74`,
      )
      .pipe(map((res: Response) => res.json()));
  }

  getHealthNews() {
    return this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=4a5f963c043e479f8749666cc36fcc74`,
      )
      .pipe(map((res: Response) => res.json()));
  }
  getTemp() {
    return this.http
      .get(
        `http://api.wunderground.com/api/ccbbbdce2e16b3c4/conditions/q/OH/Cincinnati.json`,
      )
      .pipe(map((res: Response) => res.json()));
  }
}
