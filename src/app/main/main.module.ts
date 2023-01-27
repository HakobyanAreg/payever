import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppMainRoutingModule} from "./main-routing.module";
import {AppTopBarComponent} from "../layout";
import {AppMainComponent} from "./main.component";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppCalendarComponent} from "../components/calendar/calendar.component";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppMainComponent,
    AppTopBarComponent,
    AppCalendarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    AppMainRoutingModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
})
export class AppMainModule {
}
