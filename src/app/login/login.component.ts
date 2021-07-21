import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your daily banking partner";


  acno = ""
  pswd = ""

  user: any = {
    1001: { acno: 1001, uname: "shobhit", password: "userone", balance: 3000 },
    1002: { acno: 1002, uname: "natasha", password: "usertwo", balance: 2000 },
    1003: { acno: 1003, uname: "rohan", password: "userthree", balance: 4000 },
    1004: { acno: 1004, uname: "pooja", password: "userfour", balance: 5000 },
    1005: { acno: 1005, uname: "gargi", password: "userfive", balance: 1000 }
  }

  constructor(private router:Router) { }

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


login(){
  var accnum = this.acno;
  var paswrd = this.pswd;
  let accDetails = this.user;
  if (accnum in accDetails) {
    if (paswrd == accDetails[accnum]["password"]) {
      alert("Login Successful")
      this.router.navigateByUrl("dashboard");
    } else {
      alert("Incorrect Password")
    }
  } else {
    alert("Invalid account number")
  }
  // alert("Login Clicked");
}
  
}
