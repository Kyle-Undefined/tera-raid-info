import fiveStarData from './data/raids/fivestar.json';
import sixStarData from './data/raids/sixstar.json';
import typeData from './data/types.json';
import abilityData from './data/abilities.json';
import moveData from './data/moves.json';
import herbData from './data/herbs.json';

import { Raid, Pokemon, Stats, emptyRaid, emptyPokemon } from './models/raids';
import { Type, TypeDex } from './models/types';
import { Ability, AbilityDex } from './models/abilities';
import { Move, MoveDex } from './models/moves';
import { Herb, HerbDex } from './models/herbs';

const fiveStar: Raid = fiveStarData;
const sixStar: Raid = sixStarData;
const types: Type = typeData;
const abilities: Ability = abilityData;
const moves: Move = moveData as Move;
const herbs: Herb = herbData;

export class Data {
    private _data: Raid = emptyRaid();
    private _pokemon: Pokemon = emptyPokemon();

    get dataSource() {
        return this._data;
    }

    bindData(tier: string): void {
        switch(tier) {
            case '5':
                this._data = fiveStar;
                break;
            case '6':
                this._data = sixStar;
                break;
            default:
                this._data = emptyRaid();
                break;
        }
    }

    bindPokemon(pokemon: string): void {
        this._pokemon = this._data.pokemon[pokemon];
    }

    getAbilityDexEntry(ability: number): AbilityDex {
        return abilities.abilityDex[ability - 1];
    }

    getHerbDexEntry(herb: number): HerbDex {
        return herbs.herbDex[herb];
    }

    getMoveDexEntry(move: number): MoveDex {
        return moves.moveDex[move];
    }

    getTypeDexEntry(type: number): TypeDex {
        return types.typeDex[type];
    }

    getPokemonAbilities(): number[] {
        return this._pokemon.ability.sort();
    }

    getPokemonDexNumber(): string {
        return this._pokemon.dex;
    }

    getPokemonHerbs(): number[] {
        return this._pokemon.herbs;
    }

    getPokemonHiddenAbility(): number {
        return this._pokemon.hiddenability as number;
    }

    getPokemonMoves(): number[] {
        return this._pokemon.moves;
    }

    getPokemonStats(): Stats {
        return this._pokemon.stats;
    }

    getPokemonTypeNames(): string[] {
        const names: string[] = [];

        for(let i = 0; i < this._pokemon.type.length; i++) {
            names.push(types.typeDex[this._pokemon.type[i]].name);
        }

        return names;
    }
}