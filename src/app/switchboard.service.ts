import { Injectable } from '@angular/core';
import { City } from './city';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchboardService {
  private cityWatcher = new Subject<City>();
  public city = this.cityWatcher.asObservable();

  constructor() { }

  public switchCity(city:City){
    if(city){
      this.cityWatcher.next(city);
    }
  }
}
