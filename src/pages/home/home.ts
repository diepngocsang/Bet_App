import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// Import Component
import { Login } from '../login/login';
import { ActiveBetPage } from '../active-bet/active-bet';

// Import Services - Providers
import { BusinessProvider } from '../../providers/business/business'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Define variables
  loginPage = Login;
  isLogin: boolean;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private business: BusinessProvider
  ) {}

  // Init Function
  ngOnInit() {
    this.initData();
  }

  // InitData function
  initData() {
  }

  // Navigate to Login - List Match
  goToLogin() {
    this.business.checkLogin().then((val) => {
      if (!val.token) {
        this.navCtrl.push(Login);
      } else {
        this.navCtrl.push(ActiveBetPage);
      }
    }).catch(() => {
      this.navCtrl.push(Login);
    });
  }

}
