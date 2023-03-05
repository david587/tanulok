 /*
* File: api.service.ts
* Author: Baráth Dávid
* Copyright: 2023, Baráth Dávid
* Group: Szoft 2 N
* Date: 2023-03-05
* Github: https://github.com/david587/
* Licenc: GNU GPL
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apihost = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getStudents() {
    let endpoint = 'students';
    let url = this.apihost + endpoint;
    return this.http.get<any>(url);
  }
}
