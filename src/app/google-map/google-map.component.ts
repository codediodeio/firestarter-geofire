import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service'

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;

  markers: any;

  constructor(private geo: GeoService) { }

  ngOnInit() {
    this.getUserLocation()
    this.geo.hits.subscribe(hits => this.markers = hits)

  }

  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = 37.425887//position.coords.latitude;
       this.lng = -122.079811//position.coords.longitude;


       this.geo.getLocations(500, [this.lat, this.lng])
     });
   }
 }

 private seedDatabase() {
   let dummyPoints = [
     [37.9, -122.1],
     [38.7, -122.2],
     [38.1, -122.3],
     [38.3, -122.0],
     [38.7, -122.1]
   ]

   dummyPoints.forEach((val, idx) => {
     let name = `dummy-location-${idx}`
     console.log(idx)
     this.geo.setLocation(name, val)
   })
 }

}
