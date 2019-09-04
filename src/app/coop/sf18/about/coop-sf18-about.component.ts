import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-sf18-about',
    templateUrl: './coop-sf18-about.component.html',
    styleUrls: ['./coop-sf18-about.component.scss'],
    animations: [ fadeIn ]
})
export class CoopSF18AboutComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("SF18 Co-op | About Unitron");
    }
 }