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
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { ActiveBetPage } from '../pages/active-bet/active-bet';
import { BetPage } from '../pages/bet/bet';
import { HelpContent } from '../pages/bet/help-content';
import { RankingPage } from '../pages/ranking/ranking';

// Import Services - Providers
import { UserServiceProvider } from '../providers/user-service/user-service';
import { API } from '../utilities/config';
import { PubSubServiceProvider } from '../providers/pub-sub-service/pub-sub-service';
import { PubSubProvider } from '../providers/pub-sub/pub-sub';
import { BusinessProvider } from '../providers/business/business';
import { GameServiceProvider } from '../providers/game-service/game-service';
import { ComponentsModule } from '../components/components.module';
import { SpinnerProvider } from '../providers/spinner/spinner';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    Login,
    Signup,
    ActiveBetPage,
    RankingPage,
    BetPage,
    HelpContent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    Login,
    Signup,
    ActiveBetPage,
    RankingPage,
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
    BusinessProvider,
    GameServiceProvider,
    SpinnerProvider
  ]
})
export class AppModule { }
