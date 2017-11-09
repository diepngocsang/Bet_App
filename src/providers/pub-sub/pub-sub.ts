// Import Lib
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PubSubProvider {
  
  // Define Name of Subject
  private subject = new Subject<any>();

  // Publish function
  publishLogin(value: any) {
    this.subject.next(value);
  }

  // Destroy function
  destroyLogin() {
    this.subject.next();
  }

  // Subcribe function
  subcribeLogin(): Observable<any> {
    return this.subject.asObservable();
  }
}
