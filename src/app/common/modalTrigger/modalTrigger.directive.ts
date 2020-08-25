import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from '../jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef){
        console.log("directive constructor")
        this.el = ref.nativeElement;
    };

    ngOnInit(){
        this.el.addEventListener('click', e=>{
            //es6 interpolation string used just for fun
            this.$(`#${this.modalId}`).modal({});
        })
    }
}