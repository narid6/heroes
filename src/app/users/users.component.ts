import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users:any = [];
  ngOnInit(): void {
    this.users = localStorage.getItem("users");
    this.users =JSON.parse(this.users);     
    console.log(this.users);
  }

}
