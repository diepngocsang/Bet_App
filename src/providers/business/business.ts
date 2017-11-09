// Import Lib
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BusinessProvider {
  constructor(public http: Http) { }

  // Count Win Rate base on Total Match => Return: Number
  public countWinRate(totalWin: number, totalMatch: number): number {
    return (totalWin / totalMatch) * 100;
  }

  // Count Total Lose base on Total Match => Return: Number
  public countTotalLose(totalWin: number, totalMatch: number): number {
    return totalMatch - totalWin;
  }

  // Check if User logged in or not => Return: Any
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
// this.titleName  = this.info.firstname + ' ' + this.info.lastname;
// this.fullName = this.info.lastname + ' ' + this.info.midname + ' ' + this.info.firstname;
// this.winRate = countFunc.countWinRate(this.info.totalwin, this.info.totalmatch);
// this.totalLose = countFunc.countTotalLose(this.info.totalwin, this.info.totalmatch);
// this.winRate = (this.info.totalwin / this.info.totalmatch) * 100; 
// this.totalLose = this.info.totalmatch - this.info.totalwin;
