export interface Type {
    typeDex: { [key: string]: TypeDex };
}

export interface TypeDex {
    name: string;
    attack: Damage;
    defense: Damage;
}

interface Damage {
    double: string[];
    half: string[];
    zero: string[];
}

export type Result = {
    [key: string]: number;
}