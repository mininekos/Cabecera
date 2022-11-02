import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public imagenBase: String
  public estado: Boolean
  public cambioAngular: Boolean
  public cambioJS: Boolean
  @ViewChild('ImagenJS') imgJS!: ElementRef;
  constructor() { 
    this.imagenBase="../assets/Img/clank.png";
    this.estado=true;
    this.cambioAngular=true;
    this.cambioJS=true;
  }

  ngOnInit(): void {
  }

  CambioAngular() {
    if(this.cambioAngular==true){
      this.imagenBase="../assets/Img/ratchet.png";
      this.cambioAngular=false;
    }
    else{
      this.imagenBase="../assets/Img/clank.png";
      this.cambioAngular=true;
    }
  }

  CambioJS() {
    this.imgJS.nativeElement.src="../assets/Img/ratchet.png";
    if(this.cambioJS==true){
      this.imgJS.nativeElement.src="../assets/Img/ratchet.png";
      this.cambioJS=false;
    }
    else{
      this.imgJS.nativeElement.src="../assets/Img/clank.png";
      this.cambioJS=true;
    }
  }

  CambioEstado(){
    this.estado=!this.estado;
  }
}
