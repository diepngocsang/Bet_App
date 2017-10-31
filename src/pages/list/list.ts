import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as EventSource from 'eventsource';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(public navCtrl: NavController, public http: Http, public userService: UserServiceProvider) {
    // let src = new EventSource('http://localhost:3000/api/tests/change-stream?_format=event-stream');
    // src.addEventListener('data', (msg) => {
    //   console.log(JSON.parse(msg.data)); // the change object
    // });

    //test create account
    // let input = {
    //   firstName: "Ly",
    //   lastName: "Dang",
    //   email: "ldang5@csc.com",
    //   password: "pass"
    // };
    // userService.createAccount(input).then(data => {
    //   console.log(data);
    // })

    //test login
    // let input = {
    //   email: "ldang5@csc.com",
    //   password: "pass"
    // };
    // userService.signin(input).then(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // })

    //test logout
    // userService.signout().then(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // })

  }
}
