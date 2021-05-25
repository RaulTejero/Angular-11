import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  //appSubrayado es el atributo en el selector para usar en cualquier etiqueta html(ejemplo en el directivas.ts)
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  @Input('appSubrayado') config:any;
  // con esto puedes crear un objeto para usar sus propiedades u poder cambiarlo desde el tag

  @HostBinding('class') isHover: string;
  //sirve para en este caso poner un atributo class y mas havajo con los eventos lo modifico

  constructor(private elem: ElementRef,private renderer: Renderer2) {
    // si lo haces privado para poder usarlo en todos los sitios tienes que private 
    // elem hace referencia al objeto que hace referencia;
    // /7 renderer es para cualquier plataforma (MEJOR)
    console.log("usando directiva");
    // console.log(elem.nativeElement.style.textDecoration = 'underline');
    this.renderer.setStyle(elem.nativeElement, 'text-decoration','underline');

    this.config = {
      colorHover: 'green',
      colorNoHover: 'black'
    }
    
  }
    // permite capturar los eventos de la directiva 
    @HostListener('mouseover') onHover(){
      // @HostListener(evento) funcion()
      // para poder usar renderer y element hacerlo privado y llamarlo con el this.
      this.renderer.setStyle(this.elem.nativeElement, 'color',this.config.colorHover);
      this.isHover = 'onClaseHover';
    }
    @HostListener('mouseout') outHover(){
      // @HostListener(evento) funcion()
      // para poder usar renderer y element hacerlo privado y llamarlo con el this.
      this.renderer.setStyle(this.elem.nativeElement, 'color',this.config.colorNoHover);
      this.isHover = 'oFFclaseHover'
    }
}
