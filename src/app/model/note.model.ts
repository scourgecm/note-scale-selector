import { Accident, NATURAL, SHARP, FLAT } from './note-accident.model';

export class Note {
    constructor(note: string, accident: Accident) {
        this.note = note;
        this.accident = accident;
        this.label = accident !== NATURAL ? accident.symbol : '';
    }

    note: string;
    accident: Accident;
    label: string;
    index: number;
}

export function getChromaticDegreeFromNote(
    note: string,
    accidentValue: number
): number {
    const NOTES: [string, Note][] =
        (accidentValue === FLAT.value && NOTES_FLAT) || NOTE_SHARP;

    let index = NOTES.findIndex((value: [string, Note]) => {
        return value[0] === note;
    });

    index += accidentValue;
    if (index > NOTES.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = NOTES.length - 1;
    }

    return index;
}

export const NOTE_SHARP: [string, Note][] = [
    ['C', new Note('C', NATURAL)],
    ['C', new Note('C', SHARP)],
    ['D', new Note('D', NATURAL)],
    ['D', new Note('D', SHARP)],
    ['E', new Note('E', NATURAL)],
    ['F', new Note('F', NATURAL)],
    ['F', new Note('F', SHARP)],
    ['G', new Note('G', NATURAL)],
    ['G', new Note('G', SHARP)],
    ['A', new Note('A', NATURAL)],
    ['A', new Note('A', SHARP)],
    ['B', new Note('B', NATURAL)]
];

export const NOTES_FLAT: [string, Note][] = [
    ['C', new Note('C', NATURAL)],
    ['D', new Note('D', FLAT)],
    ['D', new Note('D', NATURAL)],
    ['E', new Note('E', FLAT)],
    ['E', new Note('E', NATURAL)],
    ['F', new Note('F', NATURAL)],
    ['G', new Note('G', FLAT)],
    ['G', new Note('G', NATURAL)],
    ['A', new Note('A', FLAT)],
    ['A', new Note('A', NATURAL)],
    ['B', new Note('B', FLAT)],
    ['B', new Note('B', NATURAL)]
];
