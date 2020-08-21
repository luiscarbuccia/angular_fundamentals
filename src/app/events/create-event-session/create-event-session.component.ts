import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/event.model';

@Component({
    selector: 'create-session',
    templateUrl: './create-event-session.component.html',
    styleUrls: ['./create-event-session.component.css']
})
export class CreateEventSessionComponent implements OnInit{
    @Output() saveNewSession = new EventEmitter();
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;

    ngOnInit(){
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    private restrictedWords(words){
        return (control: FormControl):{[key: string]: any} =>{
            if(!words){
                return null
            }
            var invalidWords = words.map(w => control.value.includes(w) ? w : null)
            return invalidWords && invalidWords.length > 0 ? { 'restrictedWords' : invalidWords.join(',')} : null;
        }
    }

    saveSession(formValues){
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }

        console.log(session);
        this.saveNewSession.emit(session);
    }
}