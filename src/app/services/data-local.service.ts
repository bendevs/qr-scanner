import { Injectable, OnInit } from '@angular/core';
import { Registro } from '../models/registro.model';

import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService implements OnInit{

  guardados: Registro[] = [];
  private _storage: Storage | null = null;

  constructor( 
    private storage: Storage,
    private navController: NavController,
    private iab: InAppBrowser ) { 

    this.cargarStorage();
    /*
    this.storage.get('registros').then( registros => {
      this.guardados = registros || [];
    });
    */
  }

  async ngOnInit() {   
  }

  async cargarStorage(){    
    //Inicializar Storage esperado la promeza de manera async y con storage.create();
    const storage =  await this.storage.create();
    this._storage = storage;

    this.guardados = (await this.storage.get('registros')) || [];
  }

 

  async guardarRegistro( format: string, text: string ){

    //primero verificar si existe algo en el Storage antes.
    await this.cargarStorage();

    const nuevoRegistro = new Registro( format, text );
    this.guardados.unshift( nuevoRegistro );
    console.log(this.guardados);    
    //Guardar Registro en Storage
    this._storage.set('registros', this.guardados);

    this.abrirRegistro( nuevoRegistro );

  }

  abrirRegistro(registro : Registro){
    this.navController.navigateForward('/tabs/tab2');
    switch ( registro.type ){
      case 'http':
        this.iab.create( registro.text, '_system');
      break;
    }
  }
  
  

}
