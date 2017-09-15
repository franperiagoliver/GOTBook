import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../messages.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: Message;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.message = new Message();
  }

  sentMessage(message: Message) {
    this.messagesService.publishMessage(message).subscribe();
  }

}
