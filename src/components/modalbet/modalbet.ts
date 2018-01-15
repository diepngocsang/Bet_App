import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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
  constructor(params: NavParams, public viewCtrl: ViewController,public alertCtrl: AlertController) {
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
  
  showAlert(title,message){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  betMatch(betPoint){
    if(betPoint == undefined || betPoint == ""){
      this.showAlert('Warning!','Oops! Please fill out all fields in order to proceed.');
    }else{
      console.log(betPoint);
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
