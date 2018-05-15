import { Component, OnInit } from '@angular/core';
import { TopNewsService } from './services/news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temp: any;
  today;
  techNews;
  bizzNews;
  sportsNews;
  healthNews;

  constructor(private topNewsService: TopNewsService) {
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);

    setInterval(() => {
      this.today = new Date();
      this.BizzNews();
      this.TechNews();
      this.SportsNews();
      this.HealthNews();
    }, 60000);
  }

  ngOnInit(): void {
    this.BizzNews();
    this.TechNews();
    this.SportsNews();
    this.HealthNews();
    this.GetTemp();
  }

  BizzNews(): void {
    this.topNewsService
      .getBusinessNews()
      .subscribe(data => (this.bizzNews = data.articles));
  }

  TechNews(): void {
    this.topNewsService
      .getTechNews()
      .subscribe(data => (this.techNews = data.articles));
  }

  SportsNews(): void {
    this.topNewsService
      .getSportsNews()
      .subscribe(data => (this.sportsNews = data.articles));
  }
  HealthNews(): void {
    this.topNewsService
      .getHealthNews()
      .subscribe(data => (this.healthNews = data.articles));
  }
  GetTemp(): void {
    this.topNewsService
      .getTemp()
      .subscribe(data => console.log(data.current_observation.icon_url));
  }
}
