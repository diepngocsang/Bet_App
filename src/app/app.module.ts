// Import Lib
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage'

// Import Components - Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/step1/signup';
import { ProfilePage } from '../pages/profile/profile';
import { ListMatchPage } from '../pages/list-match/list-match';
import { BetPage } from '../pages/bet/bet';
import { HelpContent } from '../pages/bet/help-content';

// Import Services - Providers
import { UserServiceProvider } from '../providers/user-service/user-service';
import { API } from '../utilities/config';
import { PubSubServiceProvider } from '../providers/pub-sub-service/pub-sub-service';
import { PubSubProvider } from '../providers/pub-sub/pub-sub';
import { BusinessProvider } from '../providers/business/business';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    Login,
    Signup,
    ListMatchPage,
    BetPage,
    HelpContent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    Login,
    Signup,
    ListMatchPage,
    BetPage,
    HelpContent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },
    UserServiceProvider,
    API,
    PubSubProvider,
    BusinessProvider
  ]
})
export class AppModule { }
