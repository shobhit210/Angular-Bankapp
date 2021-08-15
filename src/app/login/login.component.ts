import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your daily banking partner";


  acno = ""
  pswd = ""

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // accChange(event:any){
  //   this.acno=event.target.value;
  // }

  // pswdChange(event:any){
  //   this.pswd=event.target.value;
  // }



  // login(a:any,b:any){
  //   // console.log(a);
  //   // console.log(b);
  //   var acno = a.value;
  //   console.log(acno);
  //   var pswd = b.value;
  //   console.log(pswd);

  //   let accDetails = this.user;

  //   if (acno in accDetails){
  //     if (pswd == accDetails[acno]["password"]){
  //       alert("Login Successful");
  //     } else {
  //       alert("Incorrect Password");
  //     }
  //   } else{
  //     alert("Invalid User")
  //   }





  // var accnum=this.acno;
  // var paswrd=this.pswd;
  // let accDetails = this.user;
  // if(accnum in accDetails){
  //   if(paswrd == accDetails[accnum]["password"]){
  //     alert("Login Successful")
  //   } else{
  //     alert("Incorrect Password")
  //   }
  // } else{
  //   alert("Invalid account number")
  // }
  // alert("Login Clicked");
  // }


  login() {

    if (this.loginForm.valid) {
      var accnum = this.loginForm.value.acno;
      var paswrd = this.loginForm.value.pswd;
      var result = this.ds.login(accnum, paswrd)

      if (result) {
        alert("Login Successful")
        this.router.navigateByUrl("dashboard")
      }

      // alert("Login Clicked");
    } else {
      alert("Invalid Form")
    }
  }

}
