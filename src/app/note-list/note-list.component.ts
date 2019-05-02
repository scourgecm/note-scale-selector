import { Component, OnInit } from '@angular/core';
import { NoteKeeperService } from '../note-keeper.service';
import { INoteSet } from '../model/note-set.model';

@Component({
    selector: 'app-note-list',
    templateUrl: './note-list.component.html',
    styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
    constructor(public keeperService: NoteKeeperService) {}

    ngOnInit() {}

    get noteSets(): INoteSet[] {
        return this.keeperService.savedSets;
    }

    public deleteSet(index: number): void {
        this.keeperService.deleteSet(index);
    }

    public deleteAll(): void {
        this.keeperService.deleteAll();
    }
}
