import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../animations';

@Component({
    selector: 'app-under-construction',
    templateUrl: './under-construction.component.html',
    styleUrls: ['./under-construction.component.scss'],
    animations: [ fadeIn ]
})
export class UnderConstructionComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | Working on it");
    }
 }