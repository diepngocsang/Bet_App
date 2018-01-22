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
    var usr = JSON.parse(localStorage.getItem('currentUser'));
    this.info = usr;
    //Fake Data
    this.info.currentpoint = 10000;
    this.info.totalmatch = 5;
    this.info.gender = true;
    this.info.totalwin = 3;
    this.winRate = 73;
    this.fullName = 'Sang Diep';
    this.totalLose = 2;
  }

  calculateData(){
    
  }
} 
