import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Heroe } from '../heroe';

import { HeroeService } from '../shared/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreh: string = "";
  indice:number = 0;
  miheroe: Heroe={
    nombre:"",
    bio:"",
    img:"",
    aparicion:"",
    casa:""
  };

  constructor(private heroService:HeroeService, private activatedRoute:ActivatedRoute,private router:Router) { 

    this.activatedRoute.params.subscribe( params =>{
      this.nombreh = params['nombre'];
      this.indice = this.heroService.searchUnHeroe(this.nombreh);

      if(this.indice!=-1){
        this.miheroe = this.heroService.getUnHeroe(this.indice);
      }
    });
  
  }

  ngOnInit(): void {
  }
  regresar(){
    setTimeout(()=>  this.router.navigate(['/heroes']),3500);
  }
 
}

