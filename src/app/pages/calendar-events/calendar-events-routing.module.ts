import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppCalendarEventsComponent} from "./calendar-events.component";

const routes: Routes = [
  {
    path: '',
    component: AppCalendarEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCalendarEventsRoutingModule {
}
