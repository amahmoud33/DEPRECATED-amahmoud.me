import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-sf18-desc',
    templateUrl: './coop-sf18-desc.component.html',
    styleUrls: ['./coop-sf18-desc.component.scss'],
    animations: [ fadeIn ]
})
export class CoopSF18DescComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | SF18 Coop descduction");
    }
 }