import { Component,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public imagenBase: String
  public estado: Boolean

  @ViewChild('ImagenJS') imgJS!: ElementRef;

  constructor() { 
    this.imagenBase="../assets/Img/clank.png";
    this.estado=true;
  }

  ngOnInit(): void {
  }

  hacerCambioAngular(event: String) {
    this.imagenBase=event;
  }

  hacerCambioEstado(event: Boolean) {
    this.estado=event;
  }

  hacerCambioJS(event: String) {
    this.imgJS.nativeElement.src=event;
  }

}
