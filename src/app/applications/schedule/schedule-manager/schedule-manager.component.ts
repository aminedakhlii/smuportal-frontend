import { Component, OnInit } from '@angular/core';
import {ScheduleServiceService} from "@app/shared/services";


@Component({
  selector: 'app-schedule-manager',
  templateUrl: './schedule-manager.component.html',
  styleUrls: ['./schedule-manager.component.css']
})

export class ScheduleManagerComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null;

  constructor(private scheduleServiceService : ScheduleServiceService) { }

  ngOnInit() {

  }

  onChange(event){
    this.file = <File>event.target.files[0];
  }

  uploadFile() {

    this.scheduleServiceService.upload(this.file).subscribe(x => {
      alert(x);
    }) ;
  }

  generate() {
    this.scheduleServiceService.generate().subscribe(x => {
      alert(x);
    }) ;
  }


  download() {
    this.scheduleServiceService.download().subscribe(x => {

            var newBlob = new Blob([x], { type: "text/csv" });

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }


            const data = window.URL.createObjectURL(newBlob);

            var link = document.createElement('a');
            link.href = data;
            link.download = "finalSchedule.csv";
            // this is necessary as link.click() does not work on the latest firefox
            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
  }

}
