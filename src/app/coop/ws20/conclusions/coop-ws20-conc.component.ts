import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-ws20-conc',
    templateUrl: './coop-ws20-conc.component.html',
    styleUrls: ['./coop-ws20-conc.component.scss'],
    animations: [ fadeIn ]
})
export class CoopWS20ConcComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("WS20 Co-op | Conclusions");
    }
 }