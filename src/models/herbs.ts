export interface Herb {
    herbDex: HerbDex[];
}

export interface HerbDex {
    id: number;
    name: string;
    chance: number;
}