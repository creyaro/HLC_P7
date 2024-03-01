import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly API_URL = 'http://localhost:8081/students';

  constructor(private readonly http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}