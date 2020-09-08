import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { CoopSF18Component } from './coop/sf18/coop-sf18.component';
import { CoopSF18IntroComponent } from './coop/sf18/introduction/coop-sf18-intro.component';
import { CoopSF18AboutComponent } from './coop/sf18/about/coop-sf18-about.component';
import { CoopSF18GoalsComponent } from './coop/sf18/goals/coop-sf18-goals.component';
import { CoopSF18DescComponent } from './coop/sf18/jobdescription/coop-sf18-desc.component';
import { CoopSF18ConcComponent } from './coop/sf18/conclusions/coop-sf18-conc.component';
import { CoopSF18AcknComponent } from './coop/sf18/acknowledgements/coop-sf18-ackn.component';

import { CoopS19IntroComponent } from './coop/s19/introduction/coop-s19-intro.component';
import { CoopS19AboutComponent } from './coop/s19/about/coop-s19-about.component';
import { CoopS19GoalsComponent } from './coop/s19/goals/coop-s19-goals.component';
import { CoopS19DescComponent } from './coop/s19/jobdescription/coop-s19-desc.component';
import { CoopS19ConcComponent } from './coop/s19/conclusions/coop-s19-conc.component';
import { CoopS19AcknComponent } from './coop/s19/acknowledgements/coop-s19-ackn.component';
import { CoopS19Component } from './coop/s19/coop-s19.component';

import { CoopWS20IntroComponent } from './coop/ws20/introduction/coop-ws20-intro.component';
import { CoopWS20AboutComponent } from './coop/ws20/about/coop-ws20-about.component';
import { CoopWS20GoalsComponent } from './coop/ws20/goals/coop-ws20-goals.component';
import { CoopWS20DescComponent } from './coop/ws20/jobdescription/coop-ws20-desc.component';
import { CoopWS20ConcComponent } from './coop/ws20/conclusions/coop-ws20-conc.component';
import { CoopWS20AcknComponent } from './coop/ws20/acknowledgements/coop-ws20-ackn.component';
import { CoopWS20Component } from './coop/ws20/coop-ws20.component';

import { ContactComponent } from './contact/contact.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: UnderConstructionComponent },

  /* Summer/Fall 2018 Coop Report | Unitron */
  { path: 'coop/sf18/introduction', component: CoopSF18IntroComponent },
  { path: 'coop/sf18/about', component: CoopSF18AboutComponent },
  { path: 'coop/sf18/goals', component: CoopSF18GoalsComponent },
  { path: 'coop/sf18/jobdescription', component: CoopSF18DescComponent },
  { path: 'coop/sf18/conclusions', component: CoopSF18ConcComponent },
  { path: 'coop/sf18/acknowledgements', component: CoopSF18AcknComponent },
  { path: 'coop/sf18', component: CoopSF18Component },

  /* Summer 2019 Coop Report | Unitron */
  { path: 'coop/s19/introduction', component: CoopS19IntroComponent },
  { path: 'coop/s19/about', component: CoopS19AboutComponent },
  { path: 'coop/s19/goals', component: CoopS19GoalsComponent },
  { path: 'coop/s19/jobdescription', component: CoopS19DescComponent },
  { path: 'coop/s19/conclusions', component: CoopS19ConcComponent },
  { path: 'coop/s19/acknowledgements', component: CoopS19AcknComponent },
  { path: 'coop/s19', component: CoopS19Component },

    /* Winter/Summer 2020 Coop Report | Unitron */
    { path: 'coop/ws20/introduction', component: CoopWS20IntroComponent },
    { path: 'coop/ws20/about', component: CoopWS20AboutComponent },
    { path: 'coop/ws20/goals', component: CoopWS20GoalsComponent },
    { path: 'coop/ws20/jobdescription', component: CoopWS20DescComponent },
    { path: 'coop/ws20/conclusions', component: CoopWS20ConcComponent },
    { path: 'coop/ws20/acknowledgements', component: CoopWS20AcknComponent },
    { path: 'coop/ws20', component: CoopWS20Component },

  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
