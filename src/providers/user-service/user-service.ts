// Import Lib
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { API } from '../../utilities/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserServiceProvider {
  private headers = new Headers({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private api: API) {
  }

  // Create Account - Sign Up
  createAccount(input): Promise<any> {
    return this.http.post(this.api.accountAction.REGISTER, JSON.stringify(input), this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  // Login Function
  signin(input): Promise<any> {
    return this.http.post(this.api.accountAction.LOGIN, JSON.stringify(input), this.options)
      .toPromise()
      .then((res) => {
        localStorage.setItem('currentUser', JSON.stringify({ email: res.json().data.email, token: res.json().data.id }));
        return res.json();
      })
      .catch(this.handleErrorPromise);
  }

  // Logout Function
  signout() {
    let token= JSON.parse(localStorage.getItem('currentUser')).token;
    return this.http.post(this.api.accountAction.LOGOUT+ '?access_token='+ token, this.options)
      .toPromise()
      .then((res) => {
        localStorage.removeItem('currentUser');
        return res.json();
      })
      .catch(this.handleErrorPromise);
  }

  // Change Password Function
  changePassword(input) {
    let token= JSON.parse(localStorage.getItem('currentUser')).token;
    return this.http.put(this.api.accountAction.CHANGE_PASS + '?access_token='+ token, JSON.stringify(input), this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  // Check Email Exist Function
  checkEmailExists(input) {
    return this.http.post(this.api.accountAction.CHECK_EMAIL, JSON.stringify(input), this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  // Forgot Password Function
  forgotPassword(input) {
    return this.http.post(this.api.accountAction.FORGOT_PASS, JSON.stringify(input), this.options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  // Mapping to JSON
  private extractData(res: Response) {
    return res.json() || {};
  }

  // Reject Error Promise Function 
  private handleErrorPromise(error: Response | any) {
    return Promise.reject(error.message || error);
  }
}
