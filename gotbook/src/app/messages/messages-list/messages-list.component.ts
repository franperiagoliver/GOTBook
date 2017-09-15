import { Component, OnInit } from '@angular/core';
import { Message } from "./message/message.model";
import { MessagesService } from "../messages.service";
import { Character } from "../../things/charact-dates/charact.model";
import { MessageState } from "./message/message-states.enum";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  messagesCharact: Message[];
  message: Message;
  charact: Character;

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.getMessageByCharact(this.charact)
    .subscribe(messagesByCharact => this.messagesCharact = messagesByCharact);
  }

  setStateCool(messageCharact: Message){
    messageCharact.state = MessageState.COOL;
    this.messagesService.updateStateMessage(messageCharact).subscribe();
  }

  setStatePssst(messageCharact: Message){
    messageCharact.state = MessageState.PSSST;
    this.messagesService.updateStateMessage(messageCharact).subscribe();
  }

  setStateDie(messageCharact: Message) {
    messageCharact.state = MessageState.YOU_MUST_DIE;
    this.messagesService.updateStateMessage(messageCharact).subscribe();
  }

}
