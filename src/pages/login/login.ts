import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//Import component
import { Signup } from '../signup/step1/signup';
import { HomePage } from '../home/home';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { PubSubProvider } from '../../providers/pub-sub/pub-sub';
import { ListMatchPage } from '../../pages/list-match/list-match';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  username: String;
  password: String;
  signupPage = Signup;
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController, 
    private userService: UserServiceProvider,
    public alertCtrl: AlertController, 
    private pubsub: PubSubProvider,
    public app: App) {}

  loginProcess(username,password){
    let info = {
      email: username,
      password: password
    };
    this.userService.signin(info).then((result)=>{
      if(result.success){
        this.navCtrl.setRoot(HomePage);
        this.pubsub.publishLogin(true);
        
        // this.viewCtrl.dismiss().then(() => {
        //   this.app.getRootNav().push(ListMatchPage);
        // });
        
        // let alert = this.alertCtrl.create({
        //   title: 'Login Successfully!',
        //   subTitle: 'List of Matches is implementing!',
        //   buttons: ['OK']
        // });
        // alert.present();
      }
    }).catch((error)=>{
      if(error.status === 401){
        let alert = this.alertCtrl.create({
          title: 'Login failed!',
          subTitle: 'Please check again your email and password!',
          buttons: ['OK']
        });
        alert.present();      
      }
    });
  }

  goSignup(){
    this.navCtrl.push(Signup);
  }

}
