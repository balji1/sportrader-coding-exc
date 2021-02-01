import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Comp/navbar/navbar.component';
import { EventCardComponent } from './Comp/event-card/event-card.component';
import { EventFormControlComponent } from './Comp/event-form-control/event-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventCardComponent,
    EventFormControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
