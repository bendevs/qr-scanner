import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(  ) {
    let geo: any =  this.route.snapshot.paramMap.get('geo');


    //cortar los primero 4
    geo = geo.substr(4);
    //separar por las comas
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);

    console.log(this.lat, this.lng);




  }



  ngAfterViewInit(){

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhdWRpb3JpZ28iLCJhIjoiY2t2ZGI0azVoOWEyNTJ1b2Z2am84bXhoeCJ9.eEKOemrlqpJu4t36ie62fw';
    
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      //center: [-74.0066, 40.7135],
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', () => {
      //redimensionar mapa al css 
      map.resize();

      //Marker agregar marcador de la ubicación
      new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(map);

      
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find((layer) => layer.type === 'symbol' && layer.layout['text-field']).id;

      map.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );
    });

  }

}
