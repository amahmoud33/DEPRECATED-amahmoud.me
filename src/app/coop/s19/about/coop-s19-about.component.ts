import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-s19-about',
    templateUrl: './coop-s19-about.component.html',
    styleUrls: ['./coop-s19-about.component.scss'],
    animations: [ fadeIn ]
})
export class CoopS19AboutComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("S19 Co-op | About Unitron");
    }
 }