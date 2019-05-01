import { Injectable } from '@angular/core';
import {
    INoteSet,
    NoteSet,
    NOTES,
    ACCIDENTS,
    SCALES,
    CHORDS
} from '../model/note-set.model';

@Injectable({
    providedIn: 'root'
})
export class NoteSelectorService {
    constructor() {}

    public savedSets: INoteSet[] = [];

    public saveSet(noteSet: INoteSet): void {
        this.savedSets.push(noteSet);
    }

    public getRandomSet(): INoteSet {
        return {
            note: this.getRandomElement(NOTES),
            accident: this.getRandomElement(ACCIDENTS),
            scale: this.getRandomElement(SCALES),
            chord: this.getRandomElement(CHORDS)
        };
    }

    private getRandomElement(array: any[]): any {
        const range: number = array.length - 1;
        if (range < 1) {
            return undefined;
        }

        return array[Math.round(Math.random() * range)];
    }
}
