import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Local Storage
import { Storage } from '@ionic/storage';

// Import Component
import { Login } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage = Login;
  isLogin: boolean;

  constructor(public navCtrl: NavController,private storage: Storage) {
    
  }

  ngOnInit() {
    this.initData();
  }
  
  initData(){
    console.log('Init Function');
    // var a : Test = new Test();
    // this.items=a.getInfo();
    // console.log(this.items);
  }

  goToLogin(){
    this.storage.get('isLogin').then((val) => {
      this.isLogin = val;
      console.log(this.isLogin);
    });
    this.navCtrl.push(Login);
  }

}
