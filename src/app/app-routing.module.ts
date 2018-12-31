import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoopSF18Component } from './coop/sf18/coop-sf18.component';
import { ContactComponent } from './contact/contact.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: UnderConstructionComponent },
  { path: 'coop/sf18', component: CoopSF18Component },
  { path: 'coop/s19', component: UnderConstructionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
