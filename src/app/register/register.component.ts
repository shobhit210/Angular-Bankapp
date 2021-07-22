import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""

  aim="Your daily banking partner";
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    var uname = this.uname;
    var acno = this.acno;
    var pswd = this.pswd
    var result = this.ds.register(acno,uname,pswd)

    if(result){
      alert("register Successful")
      this.router.navigateByUrl("")
    } else {
      alert("User Already Exists. Please Log In")
      this.router.navigateByUrl("")
    }
    
  }
}
