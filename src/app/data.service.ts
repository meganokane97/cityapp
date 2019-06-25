import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() {

    
   }

   cities = [
    {
      id:469,
      name: "Belfast",
      countrycode: "GBR",
      district: "Northern Ireland",
      population: 200000
    },
    {
      id:1447,
      name: "Dublin",
      countrycode: "IRL",
      district: "Leinster",
      population: 481000
    }
  ];

  public addCity(newCity:City){
    this.cities.push(newCity);
  }

  

}
