import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   //binding data from form
   username="";
   password="";
  constructor() { }

  ngOnInit(): void {
  }

  submitForm()
  {
    const message = `Hey ${this.username}! We're validating your response. Please wait.`;
    alert(message);
  }

}
