import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]')]]
  })

  withdrawForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]')]]
  })

  user=this.ds.currentUser

  constructor(private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deposit() {

    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno
      var pswd = this.depositForm.value.pswd
      var amt = this.depositForm.value.amt

      var result = this.ds.deposit(acno, pswd, amt)

      if (result) {
        alert("Amount " + amt + " credited. New balance is: " + result)
      }
    } else {
      alert("Invalid Form");
    }

  }


  withdrawal() {

    if (this.withdrawForm.valid) {
      var acno = this.withdrawForm.value.acno1
      var pswd = this.withdrawForm.value.pswd1
      var amt = this.withdrawForm.value.amt1

      var result = this.ds.withdrawal(acno, pswd, amt)

      if (result) {
        alert("Amount " + amt + " withdrawan. New balance is: " + result)
      }
    } else {
      alert("Invalid Form");
    }
  }

}
