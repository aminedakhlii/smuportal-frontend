import { Component, OnInit } from '@angular/core';
import {ScheduleServiceService} from "@app/shared/services";


@Component({
  selector: 'app-schedule-manager',
  templateUrl: './schedule-manager.component.html',
  styleUrls: ['./schedule-manager.component.css']
})

export class ScheduleManagerComponent implements OnInit {

  constructor(private scheduleServiceService : ScheduleServiceService) { }

  ngOnInit() {

  }

  generate() {
    this.scheduleServiceService.generate().subscribe(res => {

    });
  }

}
