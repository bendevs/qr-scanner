import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor( 
    private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService ) {}


  ionViewWillEnter(){
    this.scan();
  }


  scan(){
    //console.log("→ Scan");

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if( !barcodeData.cancelled ){
        this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text );
      }


     }).catch(err => {
         //console.log('Error', err);
         //this.dataLocal.guardarRegistro( 'QRCode', 'user [ { "id": 1, "nombre": "Claudio Rigollet", "email": "claudiorigo@gmail.com", "telefono": "+569 5422 5035", "password": "123456", "horario": "Vespertino", "sede": "Viña del Mar", "seccion": "V002" } ]' );
         this.dataLocal.guardarRegistro( 'QRCode', 'geo:-33.055328, -71.625498' );
     });
  }

}
