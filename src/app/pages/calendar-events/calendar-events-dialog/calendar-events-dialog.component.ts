import {Component, Inject} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'calendar-events-dialog',
  templateUrl: 'calendar-events-dialog.component.html',
  styleUrls: ['calendar-events-dialog.component.scss']
})
export class AppCalendarEventsDialogComponent {
  public eventName : string | undefined;
  public eventLocation : string | undefined;
  constructor(
    public dialogRef: MatDialogRef<AppCalendarEventsDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
