import { Component, OnInit } from '@angular/core';
import {
    INoteSet,
    NOTES,
    ACCIDENTS,
    SCALES,
    CHORDS
} from '../model/note-set.model';
import { NoteSelectorService } from '../services/note-selector.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NoteKeeperService } from '../note-keeper.service';

@Component({
    selector: 'app-note-builder',
    templateUrl: './note-builder.component.html',
    styleUrls: ['./note-builder.component.scss']
})
export class NoteBuilderComponent implements OnInit {
    public noteSet$: BehaviorSubject<INoteSet> = new BehaviorSubject<INoteSet>({
        note: undefined,
        accident: undefined,
        chord: undefined,
        scale: undefined
    });
    public noteSet: INoteSet;

    public notes: string[] = NOTES;
    public accidents: string[] = ACCIDENTS;
    public scales: string[] = SCALES;
    public chords: string[] = CHORDS;

    constructor(
        private noteService: NoteSelectorService,
        private keeperService: NoteKeeperService,
        private routeService: ActivatedRoute
    ) {}

    ngOnInit() {
        this.noteSet$.subscribe((noteSet: INoteSet) => {
            this.noteSet = { ...noteSet };
        });

        this.randomize();
    }

    public randomize(): void {
        this.noteSet$.next(this.noteService.getRandomSet());
    }

    public saveCurrentSet(): void {
        this.keeperService.saveSet(this.noteSet);
    }
}
