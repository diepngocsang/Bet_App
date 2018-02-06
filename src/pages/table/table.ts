import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// Import Component
import { Login } from '../login/login';
import { ActiveBetPage } from '../active-bet/active-bet';

// Import Services - Providers
import { BusinessProvider } from '../../providers/business/business';
import { GameServiceProvider } from '../../providers/game-service/game-service';
import { SpinnerProvider } from '../../providers/spinner/spinner';
import { Tabs } from 'ionic-angular/components/tabs/tabs';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-table',
  templateUrl: 'table.html'
})
export class TablePage {
  listMatches: Array<any>;
  grouplistMatches: any;
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(
    private loading:SpinnerProvider,
    private gameService: GameServiceProvider
  ) {}

  
  ionViewDidLoad(){
    this.initData();
  }
  // InitData function
  initData() {
    this.loading.showSpinner();
    this.gameService.getAllGames().then((res) => {
      this.listMatches = res.data;
      var groups = this.listMatches.reduce(function(obj,item){
          obj[item.date] = obj[item.date] || [];
          obj[item.date].push(item);
          return obj;
      }, {});
      var myArray = Object.keys(groups).map(function(key){
          return {date: key, data: groups[key]};
      });
      this.grouplistMatches = myArray;
      this.loading.hideSpinner();
    });
  }

}
