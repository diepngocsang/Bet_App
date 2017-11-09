import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BusinessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BusinessProvider {

  constructor(public http: Http) {
    console.log('Hello BusinessProvider Provider');
  }

  public countWinRate(totalWin: number, totalMatch: number): number {
    return (totalWin / totalMatch) * 100;
  }

  public countTotalLose(totalWin: number, totalMatch: number): number {
    return totalMatch - totalWin;
  }

  async checkLogin(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      var usr = JSON.parse(localStorage.getItem('currentUser'));
      if (usr) {
        resolve(usr);
      } else {
        resolve(false);
      }
    });
    return promise;
  }

}
