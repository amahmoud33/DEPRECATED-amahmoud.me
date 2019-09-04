import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-s19-goals',
    templateUrl: './coop-s19-goals.component.html',
    styleUrls: ['./coop-s19-goals.component.scss'],
    animations: [ fadeIn ]
})
export class CoopS19GoalsComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("S19 Co-op | Goals");
    }
 }