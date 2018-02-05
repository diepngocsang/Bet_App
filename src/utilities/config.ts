import { Injectable } from '@angular/core';

@Injectable()
export class API {
    private baseURL = 'http://localhost:3000/api';
    //Accounts API
    private accountsURL = this.baseURL + '/accounts';
    accountAction = {
        LOGIN: this.accountsURL + '/login',
        LOGOUT: this.accountsURL + '/logout',
        REGISTER: this.accountsURL,
        CHANGE_PASS: this.accountsURL + '/changePassword',
        FORGOT_PASS: this.accountsURL + '/forgotPassword',
        CHECK_EMAIL: this.accountsURL + '/checkEmailExists'
    };

    //Matches API
    private matchesURL = this.baseURL + '/Games';
    accountGame = {
        GET_ALL_GAMES: this.matchesURL + '/getGameWithTeam'
    }

    constructor() { }

    //create authorization header
    // createAuthorizationHeader(headers: Headers, tokenString) {
    //     headers.set('Authorization', tokenString);
    // }
}