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
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  withdrawForm = this.fb.group({
    acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  userName: any

  constructor(private ds: DataService, private fb: FormBuilder) {
    this.userName = localStorage.getItem("userName")
  }

  ngOnInit(): void {
  }

  deposit() {

    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno
      var pswd = this.depositForm.value.pswd
      var amt = this.depositForm.value.amt

      this.ds.deposit(acno, pswd, amt)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )
    } else {
      alert("Invalid Form");
    }

  }


  withdrawal() {

    if (this.withdrawForm.valid) {
      var acno = this.withdrawForm.value.acno
      var pswd = this.withdrawForm.value.pswd
      var amt = this.withdrawForm.value.amt

      this.ds.withdrawal(acno, pswd, amt)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
        }
      },
        (result) => {
          alert(result.error.message)
        }
      )
      
    } else {
      alert("Invalid Form");
    }
  }

}
