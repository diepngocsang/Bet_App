import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//Import component
import { Signup } from '../signup/step1/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  username: String;
  password: String;
  signupPage = Signup;
  constructor(public navCtrl: NavController, private storage: Storage) {}

  loginProcess(){
    if(this.username === "admin" && this.password === "123"){
      this.navCtrl.setRoot(HomePage);
      this.storage.set('isLogin', true);
    }else{
      console.log('Login Fail');
    }
  }

  goSignup(){
    this.navCtrl.push(Signup);
  }

}
