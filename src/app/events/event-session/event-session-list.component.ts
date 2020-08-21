import { Component, Input } from "@angular/core";
import { ISession } from '../shared/event.model';

@Component({
    selector: 'session-list',
    templateUrl: './event-session-list.component.html'
})
export class EventSessionListComponent{
    @Input() sessions: ISession[];
}
