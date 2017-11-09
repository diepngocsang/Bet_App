import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PubSubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PubSubProvider {
  private subject = new Subject<any>();

  publishLogin(value: any) {
    this.subject.next(value);
  }

  destroyLogin() {
    this.subject.next();
  }

  subcribeLogin(): Observable<any> {
    return this.subject.asObservable();
  }
}
