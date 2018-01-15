import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { HelpContent } from '../bet/help-content';

import { AlertController } from 'ionic-angular';
import { ModalbetComponent } from '../../components/modalbet/modalbet';
/**
 * Generated class for the BetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bet',
  templateUrl: 'bet.html',
})
export class BetPage {
  public detailMatch;
  public secondParam;
  amount: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.detailMatch = navParams.get("objectParams");
  }

  ionViewDidLoad() {
  }
  openHelp() {
    // let popover = this.popoverCtrl.create(HelpContent);
    // popover.present();
  }

  submitBet(value, oddBet) {
    this.amount = value.point;
  }

  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  betFunc(valueBet,subValue) {
    if(subValue){
      let profileModal = this.modalCtrl.create(ModalbetComponent, 
        { valueBet: valueBet, objGames: subValue }
      );
      profileModal.present();
    }else{
      let profileModal = this.modalCtrl.create(ModalbetComponent, 
        { valueBet: valueBet, objGames: false }
      );
      profileModal.present();
    }
    
  }
}
