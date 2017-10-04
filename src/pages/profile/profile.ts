import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {PlayerInfo} from '../../services/profileinfo';

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

  constructor(public navCtrl: NavController) {
    
  }
  
  ngOnInit() {
    var a: PlayerInfo = new PlayerInfo();
    this.info = a.getInfo();
    this.calculateData();
  }

  calculateData(){
    this.titleName  = this.info.firstname + ' ' + this.info.lastname;
    this.winRate = (this.info.totalwin / this.info.totalmatch) * 100; 
    this.totalLose = this.info.totalmatch - this.info.totalwin;
    this.fullName = this.info.lastname + ' ' + this.info.midname + ' ' + this.info.firstname;
  }
}
