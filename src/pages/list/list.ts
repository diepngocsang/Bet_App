import { Component } from '@angular/core';
import { Chats } from 'api/collections';
import { Chat } from 'api/models';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  chats;

  constructor(public navCtrl: NavController) {
    this.chats = Chats.find({}).mergeMap((chats: Chat[]) =>
      Observable.combineLatest()
    ).zone();
    //Sample call meteor methods
    MeteorObservable.call('addChats', 'test 111',
      'https://randomuser.me/api/portraits/thumb/women/1.jpg'
    ).zone().subscribe();
  }



}
