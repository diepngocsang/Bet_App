import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { MenuController } from 'ionic-angular';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { Login } from '../pages/login/login';

import { Subscription } from 'rxjs/Subscription';
import { PubSubProvider } from '../providers/pub-sub/pub-sub';

import { BusinessProvider } from '../providers/business/business'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  isLogged: boolean;
  pages: Array<{ title: string, component: any, icon: string }>;
  subscription: Subscription;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    private userService: UserServiceProvider,
    private pubsub: PubSubProvider,
    private business: BusinessProvider) {
  }

  ngOnInit() {
    this.isLogged = false;
    this.business.checkLogin().then((result)=>{
      if(result){
        this.isLogged = true;
      }
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'ios-home' },
      { title: 'List of Matches', component: ListPage, icon: 'ios-football' }
    ];
    this.subscription = this.pubsub.subcribeLogin().subscribe(value => { this.isLogged = value; });
    this.initializeApp();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('cordova')) {
        this.statusBar.styleLightContent();
        this.splashScreen.hide();
      }
    });

  };

  logOut() {
    this.userService.signout().then((result) => {
      if (result.success) {
        this.nav.setRoot(Login);
        this.menuCtrl.close();
      }
    });
  };

  openProfile() {
    this.business.checkLogin().then((result)=>{
      if(result){
        this.nav.setRoot(ProfilePage);
        this.menuCtrl.close();
      }
    });
  };

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.menuCtrl.close();
  };
}
