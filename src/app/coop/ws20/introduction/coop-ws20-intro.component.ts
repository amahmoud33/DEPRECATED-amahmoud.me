import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-ws20-intro',
    templateUrl: './coop-ws20-intro.component.html',
    styleUrls: ['./coop-ws20-intro.component.scss'],
    animations: [ fadeIn ]
})
export class CoopWS20IntroComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("WS20 Co-op | Introduction");
    }
 }