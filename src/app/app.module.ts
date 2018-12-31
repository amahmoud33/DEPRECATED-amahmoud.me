import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoopComponent } from './coop/coop.component';
import { CoopSF18Component } from './coop/sf18/coop-sf18.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CoopComponent,
    CoopSF18Component,
    ContactComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ Title ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
