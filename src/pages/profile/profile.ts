import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Test, Person} from '../../services/test';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(public navCtrl: NavController) {
  }
}
