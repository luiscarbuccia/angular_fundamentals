import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from '../jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;

    constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef){
        console.log("directive constructor")
        this.el = ref.nativeElement;
    };

    ngOnInit(){
        this.el.addEventListener('click', e=>{
            console.log("modal trigger")
            this.$('#simple-modal').modal({});
        })
    }
}