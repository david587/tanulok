/*
* File: api.component.ts
* Author: Baráth Dávid
* Copyright: 2023, Baráth Dávid
* Group: Szoft 2 N
* Date: 2023-03-05
* Github: https://github.com/david587/
* Licenc: GNU GPL
*/ 
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
  scores:any = [];

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

  getScores() {
    this.api.getScores().subscribe({
      next: (response: any) => {
        this.scores = response;
      },
      error: (err) => {
        console.log('Hiba! A REST API lekérdezés sikertelen!');
      }
    });
  }
}
