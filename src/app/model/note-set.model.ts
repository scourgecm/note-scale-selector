import { IAccident } from './note-accident.model';

export interface INoteSet {
    note: string;
    accident: IAccident;
    mode: string;
    chord: string;
}

export const NOTES: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const CHROMATIC: string[] = [
    'C',
    'C#/Db',
    'D',
    'D#/Db',
    'E',
    'F',
    'F#/Gb',
    'G',
    'G#/Ab',
    'A',
    'A#/Bb',
    'B',
];
export const MODES: string[] = [
    'ionian',
    'dorian',
    'phrygian',
    'lydian',
    'mixolydian',
    'aeolian',
    'locrian',
];
export const CHORDS: string[] = [
    'maj',
    'min',
    '7',
    'maj7',
    'min7',
    'sus2',
    'sus4',
    'add9',
    'add11',
    'o',
    'o7',
    'min7b5',
    '+',
];
