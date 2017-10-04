import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {Test, Person} from '../../services/test';
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  loginPage = Login;
  // items: any[]|Person[];
  constructor(public navCtrl: NavController) {
    this.initData();
  }
  
  initData(){
    // var a : Test = new Test();
    // this.items=a.getInfo();
    // console.log(this.items);
  }

  goToLogin(){
    this.navCtrl.push(Login);
  }

}
