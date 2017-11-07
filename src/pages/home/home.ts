import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// Import Component
import { Login } from '../login/login';
import { BusinessRule } from '../../utilities/businessrule';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage = Login;
  isLogin: boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    console.log('Init Function');
    // var a : Test = new Test();
    // this.items=a.getInfo();
    // console.log(this.items);
  }

  goToLogin() {
    var businessrule: BusinessRule = new BusinessRule();
    businessrule.checkLogin().then((val) => {
      if (!val.token) {
        this.navCtrl.push(Login);
      } else {
        let alert = this.alertCtrl.create({
          title: 'Log In',
          subTitle: 'Logged In! Implementing navigate to another page!',
          buttons: ['OK']
        });
        alert.present();
      }
    }).catch(() => {
      this.navCtrl.push(Login);
    });

    // this.storage.get('isLogin').then((val) => {
    //   this.isLogin = val;
    //   if(!this.isLogin){
    //     this.navCtrl.push(Login);
    //   }else{
    //     alert('Logged In');
    //   }
    // });

  }

}
