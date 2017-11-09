import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlayerInfo } from '../../services/services/profileinfo';

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
    // console.log(this.bus.countWinRate(10,20));
    var a: PlayerInfo = new PlayerInfo();
    this.info = a.getInfo();
    this.calculateData();
  }

  calculateData(){
    
  }
} 
