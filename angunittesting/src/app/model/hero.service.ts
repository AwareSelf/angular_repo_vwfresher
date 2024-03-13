import { Injectable } from '@angular/core';

import { Hero }       from './hero';
import { HEROES }     from './test-heroes';

@Injectable({providedIn:'root'})
/** Dummy HeroService. Pretend it makes real http requests */
export class HeroService {
  getHeroes():Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  async getHero(id: number | string): Promise<Hero|undefined> {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    const heroes = await this.getHeroes();
      return heroes.find((hero: { id: string | number; }) => hero.id === id);
  }

  async updateHero(hero: Hero): Promise<Hero> {
    const h = await this.getHero(hero.id);
      if (!h) {
          throw new Error(`Hero ${hero.id} not found`);
      }
      return Object.assign(h, hero);
  }
}