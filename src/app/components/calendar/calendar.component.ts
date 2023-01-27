import { Component, ViewChild } from "@angular/core";
import {MatCalendar} from "@angular/material/datepicker";
import {CalendarEventsService} from "../../services/calendar-events.service";

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss']
})

export class AppCalendarComponent {
  @ViewChild(MatCalendar) calendar!: MatCalendar<any>;
  public selected: Date | null | undefined;
  constructor(private _calendarEventsService: CalendarEventsService) {}

  public changedValue(date: string) {
    this._calendarEventsService.setDateObs(date)
  }
}
