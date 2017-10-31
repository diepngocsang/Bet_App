import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlayerInfo } from '../../services/services/profileinfo';
import { BusinessRule } from '../../utilities/businessrule';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  info: any;
  titleName: String;
  fullName: String;
  winRate: Number;
  totalLose: Number;

  constructor(public navCtrl: NavController, private storage:Storage) {
    
  }
  
  ngOnInit() {
    // console.log(this.bus.countWinRate(10,20));
    var a: PlayerInfo = new PlayerInfo();
    this.info = a.getInfo();
    this.calculateData();
  }

  calculateData(){
    var countFunc: BusinessRule = new BusinessRule(this.storage);
    
    this.titleName  = this.info.firstname + ' ' + this.info.lastname;
    this.fullName = this.info.lastname + ' ' + this.info.midname + ' ' + this.info.firstname;

    this.winRate = countFunc.countWinRate(this.info.totalwin, this.info.totalmatch);
    this.totalLose = countFunc.countTotalLose(this.info.totalwin, this.info.totalmatch);
    // this.winRate = (this.info.totalwin / this.info.totalmatch) * 100; 
    // this.totalLose = this.info.totalmatch - this.info.totalwin;
  }
} 
