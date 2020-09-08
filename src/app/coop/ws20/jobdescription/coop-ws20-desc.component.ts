import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-ws20-desc',
    templateUrl: './coop-ws20-desc.component.html',
    styleUrls: ['./coop-ws20-desc.component.scss'],
    animations: [ fadeIn ]
})
export class CoopWS20DescComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("WS20 Co-op | Job Description");
    }
 }