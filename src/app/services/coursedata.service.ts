import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursedataService {

  constructor(private http: HttpClient) { }

  //hämtar kurser
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/data/miun_courses.json");
  }
}
