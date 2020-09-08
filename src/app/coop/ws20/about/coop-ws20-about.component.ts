import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-ws20-about',
    templateUrl: './coop-ws20-about.component.html',
    styleUrls: ['./coop-ws20-about.component.scss'],
    animations: [ fadeIn ]
})
export class CoopWS20AboutComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("WS20 Co-op | About Unitron");
    }
 }