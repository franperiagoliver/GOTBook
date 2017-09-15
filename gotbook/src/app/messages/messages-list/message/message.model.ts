import { MessageState } from './message-states.enum';
import { Character } from '../../../things/charact-dates/charact.model';

export class Message {
    id: number;
    character: Character;
    text: string;
    date: Date;
    state: MessageState;
}
