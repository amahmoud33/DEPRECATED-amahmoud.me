import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-s19-ackn',
    templateUrl: './coop-s19-ackn.component.html',
    styleUrls: ['./coop-s19-ackn.component.scss'],
    animations: [ fadeIn ]
})
export class CoopS19AcknComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("S19 Co-op | Acknowledgements");
    }
 }