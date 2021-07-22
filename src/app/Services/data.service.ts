import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: any = {
    1001: { acno: 1001, uname: "shobhit", password: "userone", balance: 3000 },
    1002: { acno: 1002, uname: "natasha", password: "usertwo", balance: 2000 },
    1003: { acno: 1003, uname: "rohan", password: "userthree", balance: 4000 },
    1004: { acno: 1004, uname: "pooja", password: "userfour", balance: 5000 },
    1005: { acno: 1005, uname: "gargi", password: "userfive", balance: 1000 }
  }

  constructor() { }

  register(acno:any,uname:any,password:any) {

    let accDetails = this.user;
    
    if (acno in accDetails){
      alert("User Exists. Please log in")
      return false;
    } else {
      accDetails[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      return true;
    }


  }

  login(acno:any,pswd:any){

    let accDetails = this.user;

    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        
        return true
        
      } else {
        alert("Incorrect Password")
        return false
      }
    } else {
      alert("Invalid account number")
      return false
    }
  }

}
