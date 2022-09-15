import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Staff } from '../staff';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  /*staff:Staff[] = [];*/
  msg:string = "";

  staff:Staff = new Staff(123,"NelsonFarro","123","Item1","2019-02-08T11:00:00.000","2019-02-10T11:00:00.00020220206");

  constructor(@Inject(HttpClient)private http:HttpClient) { }

  insertData()
    {
      this.http.post("http://localhost:8080/staffregister", this.staff, {responseType:"text"})
      .subscribe(data => {
      this.msg = data;
    });
    }

  ngOnInit(): void {
  }

}

