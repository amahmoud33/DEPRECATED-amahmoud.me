import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../animations';

@Component({
    selector: 'app-coop-sf18',
    templateUrl: './coop-sf18.component.html',
    styleUrls: ['./coop-sf18.component.scss'],
    animations: [ fadeIn ]
})
export class CoopSF18Component {
    previousOption = "Previous";
    nextOption = "Next";

    constructor(private titleService: Title) {
        titleService.setTitle("amahmoud.me | SF18 Coop");
    }
 }