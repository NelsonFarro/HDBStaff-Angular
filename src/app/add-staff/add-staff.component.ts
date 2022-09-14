import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Staff } from '../staff';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  staff:Staff[] = [];
  msg:string = "";
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

