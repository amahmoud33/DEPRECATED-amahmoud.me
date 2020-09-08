import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-ws20-ackn',
    templateUrl: './coop-ws20-ackn.component.html',
    styleUrls: ['./coop-ws20-ackn.component.scss'],
    animations: [ fadeIn ]
})
export class CoopWS20AcknComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("WS20 Co-op | Acknowledgements");
    }
 }