import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//importo il modulo per le animazioni
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//mi permette di gestire con faciità il binding dei componenti forms 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //aggiungo il modulo Forms al progetto
    FormsModule,
    //aggiungo il momdulo delle animazioni
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
