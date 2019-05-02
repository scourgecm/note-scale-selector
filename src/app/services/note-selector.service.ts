import { Injectable } from '@angular/core';
import { INoteSet, NOTES, CHORDS, CHROMATIC } from '../model/note-set.model';
import { ACCIDENTS } from '../model/note-accident.model';
import { MODES } from '../model/note-mode.model';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root',
})
export class NoteSelectorService {
    constructor() {}

    public getRandomSet(): INoteSet {
        const noteSet: INoteSet = {
            note: this.getRandomElement(NOTES),
            accident: this.getRandomElement(ACCIDENTS),
            mode: this.getRandomElement(MODES),
            chord: this.getRandomElement(CHORDS),
            chromDegree: undefined,
        };

        noteSet.chromDegree = this.getNoteChromaticDegree(noteSet);

        return noteSet;
    }

    public getNoteChromaticDegree(note: INoteSet): number {
        let index = CHROMATIC.findIndex((value: string) => {
            return value === note.note;
        });

        index += note.accident.value;
        if (index > CHROMATIC.length - 1) {
            index = 0;
        } else if (index < 0) {
            index = CHROMATIC.length - 1;
        }

        return index;
    }

    private getRandomElement(array: any[]): any {
        const range: number = array.length - 1;
        if (range < 1) {
            return undefined;
        }

        return array[Math.round(Math.random() * range)];
    }
}
