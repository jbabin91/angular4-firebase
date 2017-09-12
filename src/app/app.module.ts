import { StatusesService } from './statuses/statuses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// Import the AngularFireModule and the AngularFireDatabaseModule
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusesComponent } from './statuses/statuses.component';

// Define the firebase database configuration keys
export const firebaseConfig = {
  apiKey: "AIzaSyDEFs_JcTbOjkgE2bMj4F20Je-louT8jqU",
  authDomain: "angular4-status-update-app.firebaseapp.com",
  databaseURL: "https://angular4-status-update-app.firebaseio.com",
  projectId: "angular4-status-update-app",
  storageBucket: "",
  messagingSenderId: "136991755372"
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
