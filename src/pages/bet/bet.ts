import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { HelpContent } from '../bet/help-content';
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
  public firstParam;
  public secondParam;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.firstParam = navParams.get("objectParams");
    console.log(this.firstParam);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BetPage');
  }
  openHelp(){
    let popover = this.popoverCtrl.create(HelpContent);
    popover.present();
    // console.log('ABCDEF')
  }

}
