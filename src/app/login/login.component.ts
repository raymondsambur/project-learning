import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validation_data = [
    {
      user_id     : 1,
      name        : "Raymond Sambur",
      username    : "raymond",
      password    : "ray123"
    },
    {
      user_id     : 2,
      name        : "Natalia Sondakh",
      username    : "natalia",
      password    : "nat123"
    }
  ]

  username_field;
  password_field;
  error;

  constructor() { }

  ngOnInit() {
  }

  firstload(){

  }

  login(){
    this.validation_data.forEach((element, index)=>{
      if(this.username_field == element.username && this.password_field == element.password){
        console.log("True", this.validation_data[index])
      }
    })
  }

}
