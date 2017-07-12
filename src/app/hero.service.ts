import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  static getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  } // stub

  getHero(id: number): Promise<Hero> {
    return HeroService.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
