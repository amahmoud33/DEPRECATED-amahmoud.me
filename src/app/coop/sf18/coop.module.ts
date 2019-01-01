import { NgModule } from '@angular/core';
import { CoopSF18Component } from './coop-sf18.component';
import { CoopSF18IntroComponent } from './introduction/coop-sf18-intro.component';
import { CoopSF18AboutComponent } from './about/coop-sf18-about.component';
import { CoopSF18GoalsComponent } from './goals/coop-sf18-goals.component';
import { CoopSF18DescComponent } from './jobdescription/coop-sf18-desc.component';
import { CoopSF18ConcComponent } from './conclusions/coop-sf18-conc.component';
import { CoopSF18AcknComponent } from './acknowledgements/coop-sf18-ackn.component';

@NgModule({
  declarations: [
    CoopSF18Component,
    CoopSF18IntroComponent,
    CoopSF18AboutComponent,
    CoopSF18GoalsComponent,
    CoopSF18DescComponent,
    CoopSF18ConcComponent,
    CoopSF18AcknComponent
  ],
  exports: [
    CoopSF18Component,
    CoopSF18IntroComponent,
    CoopSF18AboutComponent,
    CoopSF18GoalsComponent,
    CoopSF18DescComponent,
    CoopSF18ConcComponent,
    CoopSF18AcknComponent
  ]
})
export class CoopModule { }
