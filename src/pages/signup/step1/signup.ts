import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

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
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private userService: UserServiceProvider) {
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
        email: this.myForm.controls.username.value,
        password: this.myForm.controls.password.value
      };
      this.userService.createAccount(info).then(data => {
        if(data.success){
          this.navCtrl.setRoot(Login);
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
