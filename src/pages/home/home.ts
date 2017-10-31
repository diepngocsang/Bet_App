import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Local Storage
import { Storage } from '@ionic/storage';

// Import Component
import { Login } from '../login/login';
import { BusinessRule } from '../../services/utilities/businessrule';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage = Login;
  isLogin: boolean;

  constructor(public navCtrl: NavController,private storage: Storage) {
    
  }

  ngOnInit() {
    this.initData();
  }
  
  initData(){
    console.log('Init Function');
    // var a : Test = new Test();
    // this.items=a.getInfo();
    // console.log(this.items);
  }

  goToLogin(){
    var businessrule: BusinessRule = new BusinessRule(this.storage);
    businessrule.checkLogin().then((val)=>{
      if(!val){
        this.navCtrl.push(Login);
      }else{
        alert(val);
      }
    })
    
    // this.storage.get('isLogin').then((val) => {
    //   this.isLogin = val;
    //   if(!this.isLogin){
    //     this.navCtrl.push(Login);
    //   }else{
    //     alert('Logged In');
    //   }
    // });
    
  }

}
