import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/event-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes'
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/shared/event-route-activator.service';
import { EventsListResolver } from './events/shared/events-list-resolver.service';
import { AuthService } from './user/shared/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventSessionComponent } from './events/create-event-session/create-event-session.component';
import { EventSessionListComponent } from './events/event-session/event-session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './common/simpleModal/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger/modalTrigger.directive';
import { JQ_TOKEN } from './common/jQuery.service';
import { EventUpvoteComponent } from './events/event-upvote/event-upvote.component';
import { VoterService } from './user/shared/voter.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    Error404Component,
    CollapsibleWellComponent,
    CreateEventComponent,
    CreateEventSessionComponent,
    EventsAppComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventUpvoteComponent,
    EventSessionListComponent,
    EventThumbnailComponent,
    NavBarComponent, 
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    EventService, 
    VoterService,
    EventsListResolver, 
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide:JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }

  return true;
}