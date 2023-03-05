import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit{

   constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getStudents();
  }

  title = 'tanulok';

  students:any = [];

  getStudents() {
    this.api.getStudents().subscribe({
      next: (response: any) => {
        this.students = response;
        
        
        // this.message = response.message;
      },
      error: (err) => {
        console.log('Hiba! A REST API lekérdezés sikertelen!');
      }
    });
  }
}
