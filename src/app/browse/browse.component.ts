import { Component, OnInit } from '@angular/core';
import { ConcertsService } from '../services/concerts.service';

@Component({
    selector: 'Browse',
    moduleId: module.id,
    templateUrl: './browse.component.html'
})
export class BrowseComponent implements OnInit {

    concerts: any[];

    constructor(
        private concertsService: ConcertsService
    ) { }

    ngOnInit(): void {
        this.concertsService.findNext().then(concerts => this.concerts = concerts);
    }
}
