import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-s19-desc',
    templateUrl: './coop-s19-desc.component.html',
    styleUrls: ['./coop-s19-desc.component.scss'],
    animations: [ fadeIn ]
})
export class CoopS19DescComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("S19 Co-op | Job Description");
    }
 }