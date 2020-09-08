import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../animations';

@Component({
    selector: 'app-coop-ws20',
    templateUrl: './coop-ws20.component.html',
    styleUrls: ['./coop-ws20.component.scss'],
    animations: [ fadeIn ]
})
export class CoopWS20Component {
    constructor(private titleService: Title) {
        titleService.setTitle("WS20 Co-op | Table of Contents");
    }
 }