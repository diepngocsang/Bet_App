import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpinnerProvider {
  private loading: any;

  constructor(private loadingCtrl: LoadingController) {
  }
  //show loading
  showSpinner() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.loading.present();
  }

  //hide loading
  hideSpinner() {
    this.loading.dismiss();
  }

}
