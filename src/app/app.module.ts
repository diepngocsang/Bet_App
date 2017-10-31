import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

// Import Component
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/step1/signup';
import { ProfilePage } from '../pages/profile/profile';

// Import local storage
import { IonicStorageModule } from '@ionic/storage'
import { UserServiceProvider } from '../providers/user-service/user-service';
import { API } from '../utilities/config';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    Login,
    Signup
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
    Signup
  ],
  providers: [
    StatusBar,
    Storage,
    SplashScreen,
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },
    UserServiceProvider,
    API
  ]
})
export class AppModule { }
