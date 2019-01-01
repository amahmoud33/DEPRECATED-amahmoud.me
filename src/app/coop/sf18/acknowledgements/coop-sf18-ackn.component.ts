import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-sf18-ackn',
    templateUrl: './coop-sf18-ackn.component.html',
    styleUrls: ['./coop-sf18-ackn.component.scss'],
    animations: [ fadeIn ]
})
export class CoopSF18AcknComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | SF18 Coop acknduction");
    }
 }