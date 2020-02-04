import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/xaviers/api';

  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/student/${id}`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/student`, student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/student/${id}`, value);
  }

//   deleteStudent(id: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
//   }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }
}
