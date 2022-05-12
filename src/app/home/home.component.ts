import { Component, OnInit, SecurityContext } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modal:boolean = false;
  alert:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  darAlta(nombre:string,sexo:string,correo:string,fecha:string){

    let who={
      nombre: nombre,
      sexo: sexo,
      correo: correo,
      fecha: fecha
    };
    var users:any =localStorage.getItem("users");
    users =JSON.parse(users);          
    if(users==null) users=[];
    users.push(who);
    localStorage.setItem("users",JSON.stringify(users));
    this.modal = false;
    this.alert = true;
    setInterval(()=>{
      this.ptrue(); 
    },4000);

    //books=JSON.parse(books);
  }
  ptrue(){
    this.alert = false;
  }

}
