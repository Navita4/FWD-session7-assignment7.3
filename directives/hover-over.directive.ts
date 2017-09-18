import {Directive,HostListner,ElementRef} from "@angular/core";
@Directive({
    selector:"[hoverOverelement]"
})
export class HoverOverComponent{
    constructor(private elem:ElementRef){

    }
    @HostListner('mouseenter',['$event'])
    onmouseenter(event:any){
        const row=event.target.innertext;
        if (row%2){
            this.colorChange('red')//index value is odd
        }
        else{
            this.colorChange('green')// index value is even
        }
    }
    @HostListner('mouseleave')
    onmouseleave(){
        this.colorChange('null');
    }
    private colorChange(color:string){
        this.elem.nativeElement.style.color=color;
    }
}