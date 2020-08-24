import { Component } from '@angular/core' 
import { AuthService } from '../user/shared/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent{
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private authService: AuthService, private eventService: EventService){

    }
    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }
}