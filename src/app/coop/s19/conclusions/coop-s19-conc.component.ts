import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { fadeIn } from '../../../animations';

@Component({
    selector: 'app-coop-s19-conc',
    templateUrl: './coop-s19-conc.component.html',
    styleUrls: ['./coop-s19-conc.component.scss'],
    animations: [ fadeIn ]
})
export class CoopS19ConcComponent {
    constructor(private titleService: Title) {
        titleService.setTitle("S19 Co-op | Conclusion");
    }
 }