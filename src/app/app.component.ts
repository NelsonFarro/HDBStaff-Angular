import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Staff } from './staff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  

  constructor()
  {
    this.title = "HDBStaff";
    
  }
}
