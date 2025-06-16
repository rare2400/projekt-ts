import { Component } from '@angular/core';
import { RamschemaService } from '../../services/ramschema.service';
import { Course } from '../../models/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  displayedColumns: string[] = ["courseCode", "courseName", "points", "subject", "syllabus", "delete"];

  constructor(private ramschema: RamschemaService, private snackBar: MatSnackBar) { }

  getCourses(): Course[] {
    return this.ramschema.getCourses();
  }

  totalPoints(): number {
    return this.ramschema.getTotPoints();
  }

  courseCount(): number {
    return this.ramschema.getCourseCount();
  }

  deleteCourse(courseCode: string) {
    this.ramschema.deleteCourse(courseCode);
    this.snackBar.open("Kurs borttagen från ramschemat", "Stäng", {
      duration: 3000
    });
  }

  clearAll() {
    this.ramschema.clearCourses();
    this.snackBar.open("Ramschemat rensat", "Stäng", {
      duration: 5000
    });
  }
}