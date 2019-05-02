import { Injectable } from '@angular/core';
import { INoteSet, NOTES, CHORDS } from '../model/note-set.model';
import { ACCIDENTS } from '../model/note-accident.model';
import { MODES } from '../model/note-mode.model';

@Injectable({
    providedIn: 'root',
})
export class NoteSelectorService {
    constructor() {}

    public getRandomSet(): INoteSet {
        return {
            note: this.getRandomElement(NOTES),
            accident: this.getRandomElement(ACCIDENTS),
            mode: this.getRandomElement(MODES),
            chord: this.getRandomElement(CHORDS),
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
