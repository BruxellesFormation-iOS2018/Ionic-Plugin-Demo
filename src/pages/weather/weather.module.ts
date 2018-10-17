import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherPage } from './weather';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    WeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherPage),
  ],
  providers: [
    Geolocation
  ]
})
export class WeatherPageModule {}
