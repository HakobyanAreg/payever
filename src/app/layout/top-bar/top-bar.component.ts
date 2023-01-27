import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.scss']
})

export class AppTopBarComponent implements OnInit{
  public currentDate: string | undefined;

  constructor() {}

  ngOnInit() {
    this.getCurrentDate()
  }

  public getCurrentDate(): void {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    this.currentDate = month + ' ' + day + ' ' + year;
  }
}
