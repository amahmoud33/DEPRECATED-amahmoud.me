import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [ fadeIn ]
})
export class HomeComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | Home");
    }
 }