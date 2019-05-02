export interface IAccident {
    id: number;
    name: string;
    symbol: string;
    value: number;
}

export const FLAT = 0;
export const NATURAL = 1;
export const SHARP = 2;

export const ACCIDENTS: IAccident[] = [];

ACCIDENTS[FLAT] = {
    id: 1,
    name: 'flat',
    symbol: '&#9837;',
    value: -1,
};
ACCIDENTS[NATURAL] = {
    id: 2,
    name: 'natural',
    symbol: '&#9838;',
    value: 0,
};
ACCIDENTS[SHARP] = {
    id: 3,
    name: 'sharp',
    symbol: '&#9839;',
    value: 1,
};
