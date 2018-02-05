import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BetPage } from '../bet/bet';
import { GameServiceProvider } from '../../providers/game-service/game-service';
import { Pipe, PipeTransform } from "@angular/core";
import { SpinnerProvider } from '../../providers/spinner/spinner';
/**
 * Generated class for the ListMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-match',
  templateUrl: 'active-bet.html',
})
export class ActiveBetPage {
  listMatches: Array<any>;
  grouplistMatches: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loading:SpinnerProvider,
    public gameService: GameServiceProvider) {
  }

  ionViewDidLoad() {
    this.initData();
  }

  initData() {
    this.loading.showSpinner();
    this.gameService.getAllGames().then((res) => {
      this.listMatches = res.data;
      var groups = this.listMatches.reduce(function (obj, item) {
        obj[item.date] = obj[item.date] || [];
        obj[item.date].push(item);
        return obj;
      }, {});
      var myArray = Object.keys(groups).map(function (key) {
        return { date: key, data: groups[key] };
      });
      this.grouplistMatches = myArray;
      this.loading.hideSpinner();
    });
  }

  goBet(itemMatch) {
    this.navCtrl.push(BetPage, {
      objectParams: itemMatch
    });
  }
}