export class Accident {
    constructor(
        public id: number,
        public name: string,
        public symbol: string,
        public value: number
    ) {}
}

export const NATURAL = new Accident(0, 'flat', '&#9837;', -1);
export const FLAT = new Accident(1, 'natural', '&#9838;', 0);
export const SHARP = new Accident(2, 'sharp', '&#9839;', 1);

export const ACCIDENTS: Accident[] = [FLAT, NATURAL, SHARP];
