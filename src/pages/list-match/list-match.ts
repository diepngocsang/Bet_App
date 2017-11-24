import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BetPage } from '../bet/bet';
import { GameServiceProvider } from '../../providers/game-service/game-service';
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
  listMatches: Array<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public gameService: GameServiceProvider) {
    this.betPage = BetPage;
    this.params = 'Test Pass Params';
    this.gameService.getAllGames().then((res) => {
      this.listMatches = res.data;
      console.log(this.listMatches);
    });
  }
  
  ngOnInit(){
    
  }

  goBet(itemMatch) {
    this.navCtrl.push(BetPage, {
      objectParams: itemMatch
    });
  }

}
