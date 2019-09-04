import { NgModule } from '@angular/core';
import { CoopSF18Component } from './sf18/coop-sf18.component';
import { CoopSF18IntroComponent } from './sf18/introduction/coop-sf18-intro.component';
import { CoopSF18AboutComponent } from './sf18/about/coop-sf18-about.component';
import { CoopSF18GoalsComponent } from './sf18/goals/coop-sf18-goals.component';
import { CoopSF18DescComponent } from './sf18/jobdescription/coop-sf18-desc.component';
import { CoopSF18ConcComponent } from './sf18/conclusions/coop-sf18-conc.component';
import { CoopSF18AcknComponent } from './sf18/acknowledgements/coop-sf18-ackn.component';

import { CoopS19Component } from './s19/coop-s19.component';
import { CoopS19IntroComponent } from './s19/introduction/coop-s19-intro.component';
import { CoopS19AboutComponent } from './s19/about/coop-s19-about.component';
import { CoopS19GoalsComponent } from './s19/goals/coop-s19-goals.component';
import { CoopS19DescComponent } from './s19/jobdescription/coop-s19-desc.component';
import { CoopS19ConcComponent } from './s19/conclusions/coop-s19-conc.component';
import { CoopS19AcknComponent } from './s19/acknowledgements/coop-s19-ackn.component';



@NgModule({
  declarations: [
    CoopSF18Component,
    CoopSF18IntroComponent,
    CoopSF18AboutComponent,
    CoopSF18GoalsComponent,
    CoopSF18DescComponent,
    CoopSF18ConcComponent,
    CoopSF18AcknComponent,
    
    CoopS19Component,
    CoopS19IntroComponent,
    CoopS19AboutComponent,
    CoopS19GoalsComponent,
    CoopS19DescComponent,
    CoopS19ConcComponent,
    CoopS19AcknComponent
  ],
  exports: [
    CoopSF18Component,
    CoopSF18IntroComponent,
    CoopSF18AboutComponent,
    CoopSF18GoalsComponent,
    CoopSF18DescComponent,
    CoopSF18ConcComponent,
    CoopSF18AcknComponent,

    CoopS19Component,
    CoopS19IntroComponent,
    CoopS19AboutComponent,
    CoopS19GoalsComponent,
    CoopS19DescComponent,
    CoopS19ConcComponent,
    CoopS19AcknComponent
  ]
})
export class CoopModule { }
