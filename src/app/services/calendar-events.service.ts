import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalendarEventsService {
  constructor() {}
  private selectedDate$: BehaviorSubject<string> = new BehaviorSubject('');

  getDateObs(): Observable<string> {
    return this.selectedDate$.asObservable();
  }

  setDateObs(data: string) {
    this.selectedDate$.next(data);
  }

}
