import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({ 

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

    constructor(private _router:Router
    ) {
        // redirect to home if already logged in
    }

    ngOnInit() {
    }

    // convenience getter for easy access to form fields
    onSubmit() {
    }
    goToCandidateDashB(userName,uPassword) : void{
      if(userName=="zeeshan"){
        alert("hi");
        this._router.navigate(['/candidatehomepage'])
      }
      console.log(userName+"userName "+uPassword);
    }
}