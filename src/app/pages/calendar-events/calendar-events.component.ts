import {Component, OnInit} from "@angular/core";
import {HoursData} from "../helper/helper.interface";
import {_HoursData} from "../helper/helper";
import {MatDialog} from "@angular/material/dialog";
import {AppCalendarEventsDialogComponent} from "./calendar-events-dialog/calendar-events-dialog.component";
import {CalendarEventsService} from "../../services/calendar-events.service";
import {StorageService} from "../../services/storage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-calendar-events',
  templateUrl: 'calendar-events.component.html',
  styleUrls: ['calendar-events.component.scss']
})

export class AppCalendarEventsComponent implements OnInit{
  public hoursData: HoursData[] = _HoursData;
  public currentDate: string = '';
  constructor(
    public dialog: MatDialog,
    private _storageService: StorageService,
    private _calendarEventsService: CalendarEventsService
  ) {}

  ngOnInit() {
    this.getDate().subscribe(date => {
      this.currentDate = new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})
      this.hoursData = JSON.parse(JSON.stringify(_HoursData));
      this.hoursData.forEach((item: HoursData) => {
        const event = JSON.parse(this._storageService.getItem(`${this.currentDate} ${item.hour}`));
        if (event) {
          item.background = 'rgb(3, 155, 229)';
          item.events.name = event.name;
          item.events.location = event.location;
        }
      })
    })
  }


  public openDialog(e: Event, item: HoursData): void {
    const dialogRef = this.dialog.open(AppCalendarEventsDialogComponent);
    item.background = 'rgb(3, 155, 229)'

    dialogRef.afterClosed().subscribe(result => {
      item.events.name = result.eventName;
      item.events.location = result.eventLocation;
      this._storageService.setItem(`${this.currentDate} ${item.hour}`, JSON.stringify({name: item.events.name, hour: item.hour, location: item.events.location}))
    });
  }

  public getDate(){
     return this._calendarEventsService.getDateObs()
  }
}
