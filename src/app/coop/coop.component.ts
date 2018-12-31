import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../animations';

@Component({
    selector: 'app-coop',
    templateUrl: './coop.component.html',
    styleUrls: ['./coop.component.scss'],
    animations: [ fadeIn ]
})
export class CoopComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | Coop");
    }
 }