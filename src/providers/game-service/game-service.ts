// Import Lib
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { API } from '../../utilities/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameServiceProvider {
  public headers = new Headers({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*'});
  public options = new RequestOptions({ headers: this.headers });

  constructor(public http: Http,private api: API) {
  }
  // Logout Function
  getAllGames() {
    let token= JSON.parse(localStorage.getItem('currentUser')).token;
    return this.http.get(this.api.accountGame.GET_ALL_GAMES + '?access_token='+ token, this.options)
      .toPromise()
      .then((res) => {
        return res.json();
      })
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
