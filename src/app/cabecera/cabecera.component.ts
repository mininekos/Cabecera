import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public imagenBase: String
  public estado: Boolean
  @ViewChild('ImagenJS') imgJS!: ElementRef;
  constructor() { 
    this.imagenBase="../assets/Img/clank.png";
    this.estado=true;
  }

  ngOnInit(): void {
  }

  CambioAngular() {
    this.imagenBase="../assets/Img/ratchet.png";
  }

  CambioJS() {
    this.imgJS.nativeElement.src="../assets/Img/ratchet.png";
  }

  CambioEstado(){
    this.estado=!this.estado;
  }
}
