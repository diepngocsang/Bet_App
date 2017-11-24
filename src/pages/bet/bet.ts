import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { HelpContent } from '../bet/help-content';

import { AlertController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public alertCtrl: AlertController) {
    this.detailMatch = navParams.get("objectParams");
    console.log(this.detailMatch);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BetPage');
  }
  openHelp(){
    // let popover = this.popoverCtrl.create(HelpContent);
    // popover.present();
    console.log('ABCDEF')
  }

  submitBet(value, oddBet){
    this.amount = value.point;
    console.log(this.amount);
    console.log(oddBet);
  }

  showAlert(title,message){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  betFunc(valueBet){
    let prompt = this.alertCtrl.create({
      title: 'Betting',
      message: "Please input your point for Bet",
      inputs: [
        {
          name: 'point',
          placeholder: 'Point'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            if(data.point){
              this.submitBet(data,valueBet);
            }else{
              this.showAlert('Invalid Field!','Your point could not be blank! Please input to bet');
            }
            
          }
        }
      ]
    });
    prompt.present();
  }

}
