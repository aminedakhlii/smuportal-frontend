import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


const routes: Routes = [
  {
    path: "apps",
    loadChildren: () =>
      import("./logistics-reservation/logistics-reservation.module").then(
        m => m.LogisticsReservationModule
      )
  },
  {
    path: "schedule",
    loadChildren: () => import("./schedule/schedule.module").then(
      m => m.ScheduleModule
    )
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsModule {}
