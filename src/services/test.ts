export class Test {
    public getInfo():Person[]{
      return [{
        name: "ABC",
        age: 18      
      },{
        name: "DEF",
        age: 19
      },{
        name: "GHI",
        age: 20
      }];
    }
}

export class Person {
  name: String;
  age: Number;
}
