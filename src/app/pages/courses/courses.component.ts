import { Component, computed, signal } from '@angular/core';
import { CoursedataService } from '../../services/coursedata.service';
import { RamschemaService } from '../../services/ramschema.service';
import { Course } from '../../models/course';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, CommonModule, MatInputModule, MatSelect, MatOption, MatFormFieldModule, MatTableModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  /** 
   * signals med kursdata, 
   * för textfiltrering, ämnesfiltrering, sorteringsnyckel, stigande/fallande sorterfing 
   * och kolumner som visas i tabellen
   * */
  courses = signal(<Course[]>[]);
  filterValue = signal<string>("");
  filterSubject = signal<string>("");
  sortKey = signal<keyof Course>("courseCode");
  sortAsc = signal<boolean>(true);
  displayedColumns: string[] = ["courseCode", "courseName", "points", "subject", "syllabus", "add"];

  constructor(private courseService: CoursedataService, private ramschema: RamschemaService, private snackBar: MatSnackBar) { }

  //filterar och sorterar lista utifrån filter-/sorteringinställningar
  filteredCourses = computed(() => {
    const filterValue = this.filterValue().toLowerCase();
    const filterSubject = this.filterSubject().toLowerCase();
    const key = this.sortKey();
    const asc = this.sortAsc();

    //filtrerar kurser baserat på kursnamn eller kurskod och filtrerar ämne efter vald select
    const result = this.courses().filter(course =>
      (course.courseName.toLowerCase().includes(filterValue) || course.courseCode.toLowerCase().includes(filterValue)) &&
      (filterSubject === "" || course.subject.toLowerCase() === filterSubject)
    )
      .sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];

        //jämför värdena för riktningen av sortering (asc/desc)
        return (valueA < valueB ? -1 : valueA > valueB ? 1 : 0) * (asc ? 1 : -1);
      })
    console.log("Filtered courses:", result);
    return result;
  });

  //initialiserar komponenten och hämtar kurser från skapad service
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses: Course[]) =>
      this.courses.set(courses));
  }

  //hämtar ämnen för att filtrera kurser efter ämne och filtrerar bort dubletter
  chooseSubject = computed(() => {
    const allSubjects = this.courses().map(course => course.subject);
    return [...new Set(allSubjects)];
  });

  /**
   * sorterar kurserna baserat på vald rubrik/sorteringsnyckel
   * sorteringsriktingen ändras vid klick på samma rubrik
   */
  sortBy(key: keyof Course) {
    if (this.sortKey() === key) {
      this.sortAsc.set(!this.sortAsc());
    } else {
      this.sortKey.set(key);
      this.sortAsc.set(true);
    }
  }

  addCourse(course: Course) {
    this.ramschema.addCourse(course);
    this.snackBar.open("Kurs tillagd i ramschema", "Stäng", {
      duration: 3000
    });
  }

}
