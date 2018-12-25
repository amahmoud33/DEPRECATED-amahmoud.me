import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../animations';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [ fadeIn ]
})
export class ContactComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | Contact");
    }
 }