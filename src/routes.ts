import { Routes } from '@angular/router'
import { EventsListComponent } from './app/events/event-list/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event/create-event.component';
import { Error404Component } from './app/errors/404.component';
import { EventRouteActivator } from './app/events/shared/event-route-activator.service';
import { EventsListResolver } from './app/events/shared/events-list-resolver.service';
import { CreateEventSessionComponent } from './app/events/create-event-session/create-event-session.component';

export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent, resolve:{events:EventsListResolver} },
    { path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events/session/new', component: CreateEventSessionComponent},
    { path: '404', component: Error404Component}, 
    { path: '', redirectTo: '/events', pathMatch: 'full' }, 
    { path: 'user', loadChildren: 'src/app/user/module/user.module#UserModule'}
]