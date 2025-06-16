import { Component, effect, signal } from '@angular/core';
import { RamschemaService } from '../../services/ramschema.service';
import { Course } from '../../models/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  displayedColumns: string[] = ["courseCode", "courseName", "points", "subject", "syllabus", "delete"];

  constructor(private ramschema: RamschemaService) { }

  getCourses(): Course[] {
    return this.ramschema.getCourses();
  }

}