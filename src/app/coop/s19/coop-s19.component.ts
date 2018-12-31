import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [ fadeIn ]
})
export class AboutComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | About");
    }
 }