export interface IAccident {
    id: number;
    name: string;
    symbol: string;
}

export const ACCIDENTS: IAccident[] = [
    { id: 1, name: 'flat', symbol: '&#9837;' },
    { id: 2, name: 'natural', symbol: '&#9838;' },
    { id: 3, name: 'sharp', symbol: '&#9839;' },
];
