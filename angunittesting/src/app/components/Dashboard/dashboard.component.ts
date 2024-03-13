// #docregion
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero } from '../../model/hero';
import { HeroService } from '../../model/hero.service';
import { DashboardHeroComponent } from '../DashboardHero/dashboard-hero.component';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[DashboardHeroComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  hero:Hero | undefined;

  // #docregion ctor
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }
  // #enddocregion ctor

  ngOnInit() {
    this.heroService.getHeroes()
      .then((heroes: Hero[]) => this.heroes = heroes.slice(1, 5));
  }

  // #docregion goto-detail
  gotoDetail(hero: Hero) {
     this.hero = hero;
  }
  // #enddocregion goto-detail

  get title() {
    let cnt = this.heroes.length;
    return cnt === 0 ? 'No Heroes' :
      cnt === 1 ? 'Top Hero' :  `Top ${cnt} Heroes`;
  }
}