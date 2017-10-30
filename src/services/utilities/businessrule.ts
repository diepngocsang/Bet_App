import { Injectable } from '@angular/core';
@Injectable()
export class BusinessRule {
    constructor(){}
    
    public countWinRate(totalWin: number, totalMatch: number):number  {
        return (totalWin / totalMatch) * 100; 
    }

    public countTotalLose(totalWin: number, totalMatch: number):number  {
        return totalMatch - totalWin; 
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
