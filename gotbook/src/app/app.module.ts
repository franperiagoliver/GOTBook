import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchPartnerPipe } from './custom-pipes/search-partner.pipe';
import { ThingsComponent } from './things/things.component';
import { CharactDatesComponent } from './things/charact-dates/charact-dates.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnersListComponent } from './partners/partners-list/partners-list.component';
import { PartnerComponent } from './partners/partner/partner.component';
import { EventsComponent } from './events/events.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessageComponent } from './messages/messages-list/message/message.component';
import { MessagesService } from './messages/messages.service';
import { CharactService } from './things/charact-dates/charact.service';

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
    MessagesListComponent,
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
    FormsModule,
    MessagesService,
    CharactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
