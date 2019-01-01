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

  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
