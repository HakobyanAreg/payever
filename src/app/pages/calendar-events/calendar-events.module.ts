import {NgModule} from "@angular/core";
import {AppCalendarEventsComponent} from "./calendar-events.component";
import {AppCalendarEventsRoutingModule} from "./calendar-events-routing.module";
import {CommonModule} from "@angular/common";
import {AppCalendarEventsDialogComponent} from "./calendar-events-dialog/calendar-events-dialog.component";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppCalendarEventsComponent,
    AppCalendarEventsDialogComponent
  ],
  imports: [
    AppCalendarEventsRoutingModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
})

export class AppCalendarEventsModule {}
