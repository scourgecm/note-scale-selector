import { Injectable } from '@angular/core';
import { INoteSet } from './model/note-set.model';

@Injectable({
    providedIn: 'root'
})
export class NoteKeeperService {
    public savedSets: INoteSet[] = [];

    constructor() {}

    public saveSet(noteSet: INoteSet): void {
        this.savedSets.push(noteSet);
    }
}
