import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppMainRoutingModule} from "./main-routing.module";
import {AppTopBarComponent} from "../layout";
import {AppMainComponent} from "./main.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppCalendarComponent} from "../components/calendar/calendar.component";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    AppMainComponent,
    AppTopBarComponent,
    AppCalendarComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    AppMainRoutingModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule
  ],
  providers: [],
})
export class AppMainModule {
}
