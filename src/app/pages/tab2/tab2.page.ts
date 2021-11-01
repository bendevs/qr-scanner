import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public dataLocal: DataLocalService ) {}


  enviarCorreo(){
    console.log("Enviando Correo...");
  }

  abrirRegistro( registro ){
    console.log("Abrir Registro...", registro);
    this.dataLocal.abrirRegistro( registro );
  }

}
