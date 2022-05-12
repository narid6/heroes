import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../shared/heroe.service';
import { Heroe } from '../heroe';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  misHeroes:Heroe[] = [];
  constructor(public miservicio:HeroeService) {
    console.log("Constructor de Heroes");
     }

  ngOnInit(): void {
      console.log("ngOnInit Heroes");
      this.misHeroes = this.miservicio.getHeroes();
      console.log(this.misHeroes);
  }


}
