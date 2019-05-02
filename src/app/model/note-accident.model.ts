export interface IAccident {
    id: number;
    name: string;
    symbol: string;
}

export const ACCIDENTS: IAccident[] = [
    { id: 1, name: 'Flat', symbol: '&#9837;' },
    { id: 2, name: 'Natural', symbol: '&#9838;' },
    { id: 3, name: 'Sharp', symbol: '&#9839;' },
];
