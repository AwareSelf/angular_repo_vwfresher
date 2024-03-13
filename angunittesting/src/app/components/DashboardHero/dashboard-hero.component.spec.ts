//https://angular.io/guide/testing-components-basics

import { first } from "rxjs";
import { DashboardHeroComponent } from "./dashboard-hero.component";
import { Hero } from "../../model/hero";

it('raises the selected event when clicked', () => {
    const comp = new DashboardHeroComponent();
    const hero: Hero = new Hero(42,'Test');
    comp.hero = hero;
  
    comp.selected.pipe(first()).subscribe((selectedHero: Hero) => expect(selectedHero).toBe(hero));
    comp.click();
  });