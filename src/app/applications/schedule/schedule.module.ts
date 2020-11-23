import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleManagerComponent } from './schedule-manager/schedule-manager.component';
import { SharedModule } from "@app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ScheduleManagerComponent
  }
];


@NgModule({
  declarations: [ScheduleManagerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ScheduleModule { }
