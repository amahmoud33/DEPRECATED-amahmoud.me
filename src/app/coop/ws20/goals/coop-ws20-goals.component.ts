import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-ws20-goals',
    templateUrl: './coop-ws20-goals.component.html',
    styleUrls: ['./coop-ws20-goals.component.scss'],
    animations: [ fadeIn ]
})
export class CoopWS20GoalsComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("WS20 Co-op | Goals");
    }
 }