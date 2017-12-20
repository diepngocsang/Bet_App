import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalbetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modalbet',
  templateUrl: 'modalbet.html'
})
export class ModalbetComponent {
  detailMatch: any;
  valueBet: Object;
  isDraw: boolean;
  betPoint: number;
  constructor(params: NavParams, public viewCtrl: ViewController) {
    this.valueBet = params.get('valueBet');
    this.detailMatch = params.get('objGames');
    this.isDraw = true;
  }

  ngOnInit(){
    // console.log(this.valueBet);
    // console.log(this.detailMatch);
    if(!this.detailMatch){
      this.isDraw = false;
    }
  }

  betMatch(betPoint){
    console.log(betPoint);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
