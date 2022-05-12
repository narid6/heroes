import { Injectable } from '@angular/core';
import { Heroe } from '../heroe';
import { HEROES } from '../misheroes';
@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private heroes:Heroe[] = HEROES;
  constructor() { }

  getHeroes():Heroe[]{
    return this.heroes;
  }
  getUnHeroe(pos:number):Heroe{
    console.log(this.heroes[pos]);
    return this.heroes[pos];
  }
  searchUnHeroe(name:string):number{
    let i = this.heroes.findIndex(p=>p.nombre === name);
    return i;
  }
}
