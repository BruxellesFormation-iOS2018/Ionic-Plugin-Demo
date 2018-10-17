import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { OpenWeatherProvider } from '../../providers/open-weather/open-weather';

import * as moment from 'moment';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  position = "No current Position"
  weatherData: object;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private geolocation: Geolocation, 
              private openWeatherProvider: OpenWeatherProvider) {
  }

  ionViewDidLoad() {

    this.geolocation.getCurrentPosition().then((resp) => {
  
      this.position = resp.coords.latitude + ' - ' + resp.coords.longitude
      this.openWeatherProvider.forecast(resp.coords.latitude,resp.coords.longitude).subscribe((json) => {
          this.weatherData = json
      })
     }).catch((error) => {
       console.log('Error getting location', error);
       this.position = 'Error: ' + error.message
     });
  }


  formatedDate(str: string): string{
    let dateMoment = moment(str);
    //return moment().to(dateMoment);
    return dateMoment.format("dddd hh:mm")
  }

}
