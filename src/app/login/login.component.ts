import { Component, OnInit } from '@angular/core';
@Component({ 

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

    constructor(
    ) {
        // redirect to home if already logged in
    }

    ngOnInit() {
    }

    // convenience getter for easy access to form fields
    onSubmit() {
        
    }
}