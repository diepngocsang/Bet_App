import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Signup } from '../signup/step1/signup';

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  username: String;
  password: String;
  signupPage = Signup;
  constructor(public navCtrl: NavController) {
  }

  loginProcess(){
    if(this.username === "admin" && this.password === "123"){
      console.log('Login Success');
    }else{
      console.log('Login Fail');
    }
  }

  goSignup(){
    this.navCtrl.push(Signup);
  }

}
