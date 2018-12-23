import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-under-construction',
    templateUrl: './under-construction.component.html',
    styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | Working on it");
    }
 }