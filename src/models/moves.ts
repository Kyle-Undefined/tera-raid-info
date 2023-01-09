export interface Move {
    moveDex: MoveDex[];
}

export interface MoveDex {
    id: number;
    name: string;
    type: number;
    category: Category;
    pp: number;
    bp: BpEnum | number;
    acc: number;
    desc: string;
}

enum BpEnum {
    Empty = "--",
}

export enum Category {
    Physical = "Physical",
    Special = "Special",
    Status = "Status",
}