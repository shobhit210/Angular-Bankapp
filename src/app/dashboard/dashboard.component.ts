import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amt=""

  acno1=""
  pswd1=""
  amt1=""
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno = this.acno
    var pswd = this.pswd
    var amt = this.amt

    var result = this.ds.deposit(acno,pswd,amt)

    if(result){
      alert("Amount "+amt+" credited. New balance is: "+result)
    }
  }


  withdrawal(){
    var acno = this.acno1
    var pswd = this.pswd1
    var amt = this.amt1

    var result = this.ds.withdrawal(acno,pswd,amt)

    if(result){
      alert("Amount " +amt+ " withdrawan. New balance is: " +result)
    }
  }

}
