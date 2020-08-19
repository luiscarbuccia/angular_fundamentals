import { Component } from "@angular/core";
import { Router } from '@angular/router'

@Component({
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent{
    newEvent;
    isDirty:boolean = true;
    constructor(private router:Router){

    }

    saveEvent(formValues){
        console.log(formValues);
    }

    cancel(){
        this.router.navigate(['/events']);
    }
}