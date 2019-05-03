import { Accident, FLAT, SHARP } from './note-accident.model';
import { IMode } from './note-mode.model';

export interface INoteSet {
    note: string;
    accident: Accident;
    name?: string; // for [innerHTML]
    mode?: IMode;
    chord?: string;
    chromDegree?: number;
    scale?: string[];
}

export const NOTES: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const flatSym = FLAT.symbol;
const sharpSym = SHARP.symbol;
export const CHROMATIC: string[] = [
    `C`,
    `C${sharpSym}/D${flatSym}`,
    `D`,
    `D${sharpSym}/E${flatSym}`,
    `E`,
    `F`,
    `F${sharpSym}/G${flatSym}`,
    `G`,
    `G${sharpSym}/A${flatSym}`,
    `A`,
    `A${sharpSym}/B${flatSym}`,
    `B`
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
    '+'
];
