import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchPartnerPipe } from './custom-pipes/search-partner.pipe';
import { MessagesComponent } from './messages/messages.component';
import { ListMessagesComponent } from './messages/list-messages/list-messages.component';
import { MessageComponent } from './messages/list-messages/message/message.component';
import { ThingsComponent } from './things/things.component';
import { CharactDatesComponent } from './things/charact-dates/charact-dates.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnersListComponent } from './partners/partners-list/partners-list.component';
import { PartnerComponent } from './partners/partner/partner.component';
import { EventsComponent } from './events/events.component';


const appRoutes: Routes = [
  {path: 'messages', component: MessagesComponent, pathMatch: 'full'},
  {path: 'things', component: ThingsComponent},
  {path: 'partners', component:  PartnersComponent},
  {path: 'events', component: EventsComponent},
  { path: '',
  redirectTo: '/messages',
  pathMatch: 'full'
}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchPartnerPipe,
    MessagesComponent,
    ListMessagesComponent,
    MessageComponent,
    ThingsComponent,
    CharactDatesComponent,
    PartnersComponent,
    PartnersListComponent,
    PartnerComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    HttpModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
