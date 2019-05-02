export interface IMode {
    name: string;
    offset: number; // relative to major scale degrees
}

export const MODES: IMode[] = [
    { name: 'ionian', offset: 0 },
    { name: 'dorian', offset: 1 },
    { name: 'phrygian', offset: 2 },
    { name: 'lydian', offset: 3 },
    { name: 'mixolydian', offset: 4 },
    { name: 'aeolian', offset: 5 },
    { name: 'locrian', offset: 6 },
];

export const MAJOR_PATTERN: number[] = [2, 2, 1, 2, 2, 2, 1];
