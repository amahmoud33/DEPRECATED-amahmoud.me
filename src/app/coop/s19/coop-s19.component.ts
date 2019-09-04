import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../animations';

@Component({
    selector: 'app-coop-s19',
    templateUrl: './coop-s19.component.html',
    styleUrls: ['./coop-s19.component.scss'],
    animations: [ fadeIn ]
})
export class CoopS19Component {
    constructor(private titleService: Title) {
        titleService.setTitle("S19 Co-op | Table of Contents");
    }
 }