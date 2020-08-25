import { Component, Input, ElementRef, Inject, ViewChild } from "@angular/core";
import { JQ_TOKEN } from '../jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: './simpleModal.component.html',
    styleUrls: ['./simpleModal.component.css']
})
export class SimpleModalComponent{
    @Input() title:string;
    @Input() elementId:string;
    @ViewChild('modalcontainer', {static: false}) containerEl: ElementRef;

    private el: HTMLElement;


    constructor(@Inject(JQ_TOKEN) private $: any){
      
    }

    closeModal(){
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}