
import { Injectable } from '@angular/core';
// Import Local Storage
import { Storage } from '@ionic/storage';
@Injectable()
export class BusinessRule {
    constructor(private storage: Storage) { }

    public countWinRate(totalWin: number, totalMatch: number): number {
        return (totalWin / totalMatch) * 100;
    }

    public countTotalLose(totalWin: number, totalMatch: number): number {
        return totalMatch - totalWin;
    }

    async checkLogin(): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            // do some async stuff
            this.storage.get('isLogin').then((val) => {
                resolve(val);
            });
        });
        return promise;
    }
}

// export class Player {
//   firstname: String;
//   midname: String;
//   lastname: String;
//   gender: Boolean; //true: Male | false: Female
//   currentpoint: Number;
//   totalmatch: Number;
//   favorite: String;
//   totalwin: Number;
//   averagepoint: Number;
// }
