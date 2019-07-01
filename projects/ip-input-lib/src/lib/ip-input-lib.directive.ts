import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[ip]',
  providers: [{provide: NG_VALIDATORS, useExisting: IpInputLibDirective, multi: true}]
})

export class IpInputLibDirective implements Validator, OnInit{
  constructor(private elementRef: ElementRef, private renderer: Renderer2){}

  ngOnInit(){
      this.renderer.setProperty(this.elementRef.nativeElement, "placeholder", "xxx.xxx.xxx.xxx");
  }

  @HostListener('keydown', ['$event']) keyPress(event) {
    let element = this.elementRef.nativeElement; //host element
    let value = element.value;

    if(event.key==="Tab")
    {
      //if current IP address text ends at a number, insert a dot
      if(value.match(/^((0|[1-9]\d{0,2})\.){0,2}(0|[1-9]\d{0,2})$/) != null)
      {
        event.preventDefault();
        this.renderer.setProperty(element, 'value', value+".");
      }

      //if current IP address text is empty or has at most 2 sub-blocks ending at a dot, insert a 0.
      else if(value.match(/^((0|[1-9]\d{0,2})\.){0,2}$/) != null)
      {
        event.preventDefault();
        this.renderer.setProperty(element, 'value', value+"0.");
      }

      //if current IP address text has 3 sub-blocks ending at a dot, insert a 0 and move to next form field
      else if(value.match(/^((0|[1-9]\d{0,2})\.){3}$/) != null)
      {
        this.renderer.setProperty(element, 'value', value+"0");
      }

    }

    if(event.key in [0,1,2,3,4,5,6,7,8,9])
    {
      //insert a dot whenever 3rd digit of a sub-block of the IP address is entered
      if(value.match(/^((0|[1-9]\d{0,2})\.){0,2}([1-9]\d)$/) != null)
      {
        event.preventDefault();
        this.renderer.setProperty(element, 'value', value+event.key+".");
      }

      //restrict user from entering more than 3 digits in the last sub-block of IP address
      else if(value.match(/^((0|[1-9]\d{0,2})\.){3}([1-9]\d{2})$/) != null)
      {
        if(element.selectionStart==element.selectionEnd){
          if(value.length==element.selectionStart)
          {
            event.preventDefault();
          }
        }
      }
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return IpInputLibDirective.ipAddress(control);
  }

  static ipAddress(c: AbstractControl): ValidationErrors | null{
    if(c.dirty)
    {
      let value = c.value;
      if(value.match(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) == null)
      {
        return { ipInvalid: "Invalid IP address" }
      }
      else{
        return null;
      }
    }
  }

}

