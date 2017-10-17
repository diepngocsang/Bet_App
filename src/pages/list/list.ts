import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as EventSource from 'eventsource';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(public navCtrl: NavController, public http: Http) {
    let src = new EventSource('http://localhost:3000/api/tests/change-stream?_format=event-stream');
    src.addEventListener('data', (msg) => {
      console.log(JSON.parse(msg.data)); // the change object
    });
  }
}
