import { Component, OnInit } from '@angular/core';
import { INoteSet, NOTES, MODES, CHORDS } from '../model/note-set.model';
import { NoteSelectorService } from '../services/note-selector.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NoteKeeperService } from '../note-keeper.service';
import { IAccident, ACCIDENTS } from '../model/note-accident.model';

@Component({
    selector: 'app-note-builder',
    templateUrl: './note-builder.component.html',
    styleUrls: ['./note-builder.component.scss'],
})
export class NoteBuilderComponent implements OnInit {
    public noteSet$: BehaviorSubject<INoteSet> = new BehaviorSubject<INoteSet>({
        note: undefined,
        accident: undefined,
        chord: undefined,
        mode: undefined,
    });
    public noteSet: INoteSet;

    public notes: string[] = NOTES;
    public accidents: IAccident[] = ACCIDENTS;
    public modes: string[] = MODES;
    public chords: string[] = CHORDS;

    constructor(
        private noteService: NoteSelectorService,
        private keeperService: NoteKeeperService,
        private routeService: ActivatedRoute,
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
