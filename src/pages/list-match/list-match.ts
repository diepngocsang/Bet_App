import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BetPage } from '../bet/bet';

/**
 * Generated class for the ListMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-match',
  templateUrl: 'list-match.html',
})
export class ListMatchPage {
  betPage: any;
  params: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.betPage = BetPage;
    this.params = 'Test Pass Params';
  }

  goBet(){
    this.navCtrl.push(BetPage,{
      objectParams: this.params
    });
  }

}
