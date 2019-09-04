import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-s19-intro',
    templateUrl: './coop-s19-intro.component.html',
    styleUrls: ['./coop-s19-intro.component.scss'],
    animations: [ fadeIn ]
})
export class CoopS19IntroComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("S19 Co-op | Introduction");
    }
 }