import {Component, OnInit} from "@angular/core";
import {CalendarEventsService} from "../../services/calendar-events.service";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.scss']
})

export class AppTopBarComponent implements OnInit{
  public currentDate: string | undefined;

  constructor(
    private _calendarEventsService: CalendarEventsService,
    private _storageService: StorageService
  ) {}

  ngOnInit() {

    this._calendarEventsService.getDateObs().subscribe(data => {
      if (!data) {
        this.getCurrentDate()

        if(!!this.currentDate) {
          this._calendarEventsService.setDateObs(this.currentDate)
        }
      } else {
        this.currentDate = new Date(data).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})
      }
    });
  }

  public getCurrentDate(): void {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    this.currentDate = month + ' ' + day + ' ' + year;
  }
}
