import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = ""
  currentAcc = ""

  user: any = {
    1001: { acno: 1001, uname: "shobhit", password: "userone", balance: 3000, transaction: [] },
    1002: { acno: 1002, uname: "natasha", password: "usertwo", balance: 2000, transaction: [] },
    1003: { acno: 1003, uname: "rohan", password: "userthree", balance: 4000, transaction: [] },
    1004: { acno: 1004, uname: "sagar", password: "userfour", balance: 5000, transaction: [] },
    1005: { acno: 1005, uname: "gargi", password: "userfive", balance: 1000, transaction: [] }
  }

  constructor(private http: HttpClient) {
    this.getDetails()
  }

  saveDetails() {
    localStorage.setItem("user", JSON.stringify(this.user))

    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }

    if (this.currentAcc) {
      localStorage.setItem("currentAcc", JSON.stringify(this.currentAcc))
    }
  }


  getDetails() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user") || '')
    }

    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }

    if (localStorage.getItem("currentAcc")) {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
    }
  }

  getTransaction(acno:any) {
    const data={
      acno
    }

    return this.http.post("http://localhost:3000/getTransaction",data,options)
  }

  register(acno: any, uname: any, password: any) {

    const data = {
      acno,
      uname,
      password
    }

    return this.http.post("http://localhost:3000/register", data);

    // let accDetails = this.user;

    // if (acno in accDetails) {
    //   alert("User Exists. Please log in")
    //   return false;
    // } else {
    //   accDetails[acno] = {
    //     acno,
    //     uname,
    //     password,
    //     balance: 0,
    //     transaction:[]
    //   }
    //   this.saveDetails()
    //   return true;
    // }


  }

  login(acno: any, pswd: any) {

    const data = {
      acno,
      pswd
    }

    return this.http.post("http://localhost:3000/login", data, options);


    // let accDetails = this.user;

    // if (acno in accDetails) {
    //   if (pswd == accDetails[acno]["password"]) {
    //     this.currentUser = accDetails[acno]["uname"]
    //     this.currentAcc=acno;
    //     this.saveDetails()
    //     return true

    //   } else {
    //     alert("Incorrect Password")
    //     return false
    //   }
    // } else {
    //   alert("Invalid account number")
    //   return false
    // }
  }

  deposit(acno: any, pswd: any, amt: any) {

    const data = {
      acno,
      pswd,
      amt
    }

    return this.http.post("http://localhost:3000/deposit", data, options)

    // var amount = parseInt(amt);
    // let accDetails = this.user
    // if (acno in accDetails) {
    //   if (pswd == accDetails[acno]["password"]) {
    //     accDetails[acno]["balance"] += amount;
    //     accDetails[acno].transaction.push({
    //       amount:amount,
    //       type:"CREDIT"
    //     })
    //     this.saveDetails()
    //     return accDetails[acno]["balance"]
    //   } else {
    //     alert("Incorrect Password")
    //   }
    // } else {
    //   alert("Invalid User")
    // }
  }


  withdrawal(acno: any, pswd: any, amt: any) {

    const data = {
      acno,
      pswd,
      amt
    }

    return this.http.post("http://localhost:3000/withdrawal", data, options)



    //   var amount = parseInt(amt);
    //   let accDetails = this.user
    //   if (acno in accDetails) {
    //     if (pswd == accDetails[acno]["password"]) {
    //       if (accDetails[acno]["balance"] > amount) {
    //         accDetails[acno]["balance"] -= amount
    //         accDetails[acno].transaction.push({
    //           amount:amount,
    //           type:"DEBIT"
    //         })
    //         this.saveDetails()
    //         return accDetails[acno]["balance"]
    //       } else {
    //         alert("Insufficient Balance")
    //         return false
    //       }
    //     } else {
    //       alert("Incorrect Password")
    //       return false
    //     }
    //   } else {
    //     alert("Invalid User")
    //     return false
    //   }
    // }

  }

  deleteAcc(acno:any){
    return this.http.delete("http://localhost:3000/deleteAcc/"+acno, options)
  }
}
