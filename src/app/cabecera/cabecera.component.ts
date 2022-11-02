import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  
  @Output() CambioAngular = new EventEmitter<String>();
  @Output() CambioJS = new EventEmitter<String>();
  @Output() CambioEstado = new EventEmitter<Boolean>();
  estadoImagenAngular:Boolean
  estadoImagenJS:Boolean
  estado: Boolean;
  constructor() { 
    this.estadoImagenAngular=true;
    this.estadoImagenJS=true;
    this.estado=true;
  }

  ngOnInit(): void {
  }

  CambiarAngular() {
    if(this.estadoImagenAngular==true){
      this.CambioAngular.emit("../assets/Img/ratchet.png");
      this.estadoImagenAngular=false;
    }
    else{
      this.CambioAngular.emit("../assets/Img/clank.png");
      this.estadoImagenAngular=true;
    }
  }

  CambiarJS() {
    if(this.estadoImagenJS==true){
      this.CambioJS.emit("../assets/Img/ratchet.png");
      this.estadoImagenJS=false;
    }
    else{
      this.CambioJS.emit("../assets/Img/clank.png");
      this.estadoImagenJS=true;
    }
  }

  CambiarEstado(){
    this.estado=!this.estado;
    this.CambioEstado.emit(this.estado);
  }
}
