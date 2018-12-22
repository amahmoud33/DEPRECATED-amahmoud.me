import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [],
    exports: [
        NavbarComponent,
        FooterComponent
    ],
    providers: []
})
export class CoreModule { }
