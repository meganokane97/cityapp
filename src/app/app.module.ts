import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NameFilterPipe } from './name-filter.pipe';
import { AddCityComponent } from './add-city/add-city.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DistrictDirective } from './district.directive';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    NameFilterPipe,
    AddCityComponent,
    DistrictDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
