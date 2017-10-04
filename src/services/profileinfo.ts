export class PlayerInfo {
    public getInfo():Player{
      return {
        firstname: "sang",
        midname: "ngoc", 
        lastname: "diep",
        gender: true,
        currentpoint: 20000,
        totalmatch: 5,
        favorite: "Argentina",
        totalwin: 3,
        averagepoint: 1000
      };
    }
}

export class Player {
  firstname: String;
  midname: String;
  lastname: String;
  gender: Boolean; //true: Male | false: Female
  currentpoint: Number;
  totalmatch: Number;
  favorite: String;
  totalwin: Number;
  averagepoint: Number;
}
