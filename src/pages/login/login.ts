// Import Lib
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { App } from 'ionic-angular';

// Import Providers - Services
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { PubSubProvider } from '../../providers/pub-sub/pub-sub';

// Import Pages - Components
import { Signup } from '../signup/signup';
import { HomePage } from '../home/home';
import { ActiveBetPage } from '../../pages/active-bet/active-bet';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  // Define Variables
  username: String;
  password: String;
  signupPage = Signup;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private userService: UserServiceProvider,
    public alertCtrl: AlertController,
    private pubsub: PubSubProvider,
    private loading: SpinnerProvider,
    public app: App) { }

  // Login function with userService
  loginProcess(username, password) {
    this.loading.showSpinner();
    // Object to POST
    let info = {
      email: username,
      password: password
    };
    this.userService.signin(info).then((result) => {
      // Login Success
      this.loading.hideSpinner();
      if (result.success) {
        this.navCtrl.setRoot(ActiveBetPage);
        this.pubsub.publishLogin(true);
      }
    }).catch(err => {
      this.loading.hideSpinner();
      if (err._body != undefined && JSON.parse(err._body).error != undefined) {
        let error = JSON.parse(err._body).error;

        let alert = this.alertCtrl.create({
          title: 'Login failed!',
          subTitle: error.message,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  // Navigate to Sign Up
  goSignup() {
    this.navCtrl.push(Signup);
  }

}
