import { Component, Input } from "@angular/core";

@Component({
    selector: 'simple-modal',
    templateUrl: './simpleModal.component.html',
    styleUrls: ['./simpleModal.component.css']
})
export class SimpleModalComponent{
    @Input() title:string;
    @Input() elementId:string;

    constructor(){
        console.log("simple modal component")
    }
}