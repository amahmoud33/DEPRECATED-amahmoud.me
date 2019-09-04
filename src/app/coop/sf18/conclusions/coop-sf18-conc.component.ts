import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-sf18-conc',
    templateUrl: './coop-sf18-conc.component.html',
    styleUrls: ['./coop-sf18-conc.component.scss'],
    animations: [ fadeIn ]
})
export class CoopSF18ConcComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("SF18 Co-op | Conclusions");
    }
 }