import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'upvote',
    templateUrl: './event-upvote.component.html',
    styleUrls: ['./event-upvote.component.css']
})
export class EventUpvoteComponent{
    @Input() count:number;
    @Input() isVoting:boolean;
    @Output() voteEmitter = new EventEmitter();

    onClick(){
        this.voteEmitter.emit({
            //this isn't passing out any actual data, so we're emitting an empty object
        })
    }
}