import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
@Component({
  selector: 'app-unheroe',
  templateUrl: './unheroe.component.html',
  styleUrls: ['./unheroe.component.css']
})
export class UnheroeComponent implements OnInit {

  
  @Input() heroe!:Heroe;

  constructor(public heroeService:HeroeService,public activateRoute:ActivatedRoute) { }



  ngOnInit(): void {
    if(!this.heroe){ //correción del código Gina
      this.activateRoute.params.subscribe(params=>{
        console.log(params);
        this.heroe = this.heroeService.getUnHeroe(params['id']);
      });
    }
  }

}
