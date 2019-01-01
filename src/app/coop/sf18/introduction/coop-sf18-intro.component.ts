import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-sf18-intro',
    templateUrl: './coop-sf18-intro.component.html',
    styleUrls: ['./coop-sf18-intro.component.scss'],
    animations: [ fadeIn ]
})
export class CoopSF18IntroComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | SF18 Coop | Introduction");
    }
 }