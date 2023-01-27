import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppMainComponent} from "./main.component";


const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [
      {path: '', redirectTo: 'calendar-events', pathMatch: 'full'},
      {
        path: 'calendar-events',
        title: 'calendar',
        loadChildren: () => import('../pages/calendar-events/calendar-events.module').then(it => it.AppCalendarEventsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMainRoutingModule {
}
