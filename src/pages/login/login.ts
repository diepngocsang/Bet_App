import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
//Import component
import { Signup } from '../signup/step1/signup';
import { HomePage } from '../home/home';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  username: String;
  password: String;
  signupPage = Signup;
  constructor(public navCtrl: NavController, private storage: Storage, private userService: UserServiceProvider,public alertCtrl: AlertController) {}

  loginProcess(username,password){
    let info = {
      email: username,
      password: password
    };
    this.userService.signin(info).then((result)=>{
      if(result.success){
        this.navCtrl.setRoot(HomePage);
        let alert = this.alertCtrl.create({
          title: 'Login Successfully!',
          subTitle: 'List of Matches is implementing!',
          buttons: ['OK']
        });
        alert.present();
      }
    }).catch((error)=>{
      if(error.status === 401){
        let alert = this.alertCtrl.create({
          title: 'Login failed!',
          subTitle: 'Please check again your email and password!',
          buttons: ['OK']
        });
        alert.present();      
      }
    });
  }

  goSignup(){
    this.navCtrl.push(Signup);
  }

}
