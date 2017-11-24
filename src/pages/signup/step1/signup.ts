import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceProvider } from '../../../providers/user-service/user-service';
import { AlertController } from 'ionic-angular';
import { Login } from '../../login/login';
/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  public myForm: FormGroup; // our model driven form
  constructor(public navCtrl: NavController,
    private userService: UserServiceProvider,
    private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirm: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    });
  };

  submitForm() {
    if (this.myForm.controls.confirm.value === this.myForm.controls.password.value) {
      let info = {
        firstName: this.myForm.controls.firstname.value,
        lastName: this.myForm.controls.lastname.value,
        userName: this.myForm.controls.username.value,
        password: this.myForm.controls.password.value,
        email: this.myForm.controls.username.value
      };
      this.userService.createAccount(info).then(data => {
        console.log(data);
        if (data.success) {
          let alert = this.alertCtrl.create({
            title: 'Sign Up!',
            subTitle: data.message,
            buttons: ['OK']
          });
          alert.present().then(()=>{
            this.navCtrl.setRoot(Login);
          });
        }
      }).catch(err => {
        if(err._body!=undefined && JSON.parse(err._body).error!=undefined){
          let error = JSON.parse(err._body).error;

          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: error.message,
            buttons: ['OK']
          });
          alert.present().then(()=>{
            this.myForm.controls.username.reset();
          });
        }
      });
    };
  };
}

export class RegisInfo {
  username: String;
  password: String;
  firstname: String;
  lastname: String;
};
