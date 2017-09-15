import { MessageState } from "./message-states.enum";

export class Message {
    id: number;
    text: string;
    nameUser: string;
    surnameUser: string;
    date: Date;
    state: MessageState;
}