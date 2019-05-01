export interface INoteSet {
    note: string;
    accident: string;
    scale: string;
    chord: string;
}

export class NoteSet implements INoteSet {
    note: string;
    accident: string;
    scale: string;
    chord: string;
}

export const NOTES: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const ACCIDENTS: string[] = ['#', 'natural', 'b'];
export const SCALES: string[] = ['maj', 'min'];
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
    '+'
];
