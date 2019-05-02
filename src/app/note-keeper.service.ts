import { Injectable } from '@angular/core';
import { INoteSet } from './model/note-set.model';

@Injectable({
    providedIn: 'root'
})
export class NoteKeeperService {
    public savedSets: INoteSet[];

    constructor() {
        this.savedSets = JSON.parse(localStorage.getItem('savedSets')) || [];
    }

    public saveSet(noteSet: INoteSet): void {
        this.savedSets.push({ ...noteSet });
        this.saveToLocalStorage();
    }

    public deleteSet(index: number) {
        this.savedSets.splice(index, 1);
        this.saveToLocalStorage();
    }

    public deleteAll(): void {
        this.savedSets = [];
        this.saveToLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem('savedSets', JSON.stringify(this.savedSets));
    }
}
