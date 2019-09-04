import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-sf18-goals',
    templateUrl: './coop-sf18-goals.component.html',
    styleUrls: ['./coop-sf18-goals.component.scss'],
    animations: [ fadeIn ]
})
export class CoopSF18GoalsComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("SF18 Co-op | Goals");
    }
 }