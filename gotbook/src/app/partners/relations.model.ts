import { Character } from '../things/charact-dates/charact.model';

export class Relation {
    requester: Character;
    requested: Character;
    accepted: boolean;
}
