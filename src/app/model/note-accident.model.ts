export interface IAccident {
    id: number;
    name: string;
    symbol: string;
    value: number;
}

export const ACCIDENTS: IAccident[] = [
    { id: 1, name: 'flat', symbol: '&#9837;', value: -1 },
    { id: 2, name: 'natural', symbol: '&#9838;', value: 0 },
    { id: 3, name: 'sharp', symbol: '&#9839;', value: 1 },
];
