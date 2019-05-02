import { Injectable } from '@angular/core';
import { INoteSet, NOTES, CHORDS, CHROMATIC } from '../model/note-set.model';
import { ACCIDENTS, IAccident } from '../model/note-accident.model';
import { MODES, IMode } from '../model/note-mode.model';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root',
})
export class NoteSelectorService {
    constructor() {}

    public buildSet(
        note: string,
        accident: IAccident,
        mode: IMode,
        chord: string,
    ): INoteSet {
        const noteSet: INoteSet = {
            note,
            accident,
            mode,
            chord,
        };
        noteSet.chromDegree = this.getNoteChromaticDegree(noteSet);
        noteSet.name = noteSet.note + (accident.name !== 'natural' ? accident.symbol : '');
        return noteSet;
    }

    public getRandomSet(): INoteSet {
        return this.buildSet(
            this.getRandomElement(NOTES),
            this.getRandomElement(ACCIDENTS),
            this.getRandomElement(MODES),
            this.getRandomElement(CHORDS),
        );
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

    public getScale(rootDegree: number, offset: number): string[] {
        return [];
    }

    private getRandomElement(array: any[]): any {
        const range: number = array.length - 1;
        if (range < 1) {
            return undefined;
        }

        return array[Math.round(Math.random() * range)];
    }
}
