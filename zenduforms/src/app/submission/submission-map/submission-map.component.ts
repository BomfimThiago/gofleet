import { Submission } from './../submission';
import { Component, Input, SimpleChanges } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-submission-map',
  standalone: true,
  imports: [
    LeafletModule
  ],
  templateUrl: './submission-map.component.html',
  styleUrl: './submission-map.component.css'
})
export class SubmissionMapComponent   {
  @Input() submissions: Submission[] = [];
  centerCoordinates: any;

  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 10 ,
    center: L.latLng(43.6532, -79.3832 )
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': L.tileLayer('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': L.circle([ 46.95, -122 ], { radius: 5000 }),
      'Big Square': L.polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  }

  layers = [
    L.marker([ 0, 0 ])
  ];

  mapIcon = L.icon({
    iconUrl: '/assets/icons/map.svg',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

  ngOnInit() {
    this.initializeMap(this.submissions)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['submissions']) {
      this.initializeMap(changes['submissions'].currentValue);
    }
  }

  private initializeMap(submissions: Submission[]): void {
    this.layers = [];
    const center = this.calculateCenterCoordinates(submissions);
  
    console.log(center)
    submissions.forEach(submission => {
      const marker = L.marker([submission.latitude, submission.longitude], { icon: this.mapIcon });
      this.layers.push(marker);
    });
  }

  private calculateCenterCoordinates(submissions: Submission[]): L.LatLngExpression {
    const sumLat = submissions.reduce((sum, submission) => sum + submission.latitude, 0);
    const sumLng = submissions.reduce((sum, submission) => sum + submission.longitude, 0);

    const avgLat = sumLat / submissions.length;
    const avgLng = sumLng / submissions.length;

    return L.latLng(avgLat, avgLng)
  }

}
