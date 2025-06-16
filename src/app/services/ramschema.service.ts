import { effect, Injectable, signal } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
  private readonly storageKey = "ramschema";
  private schema = signal<Course[]>(this.loadFromStorage());

  constructor() {
    effect(() => {
      const current = this.schema();
      localStorage.setItem(this.storageKey, JSON.stringify(current));
    });
  }

  getCourses(): Course[] {
    return this.schema();
  }

  addCourse(course: Course): boolean {
    const currentCourses = this.schema();
    const courseExists = currentCourses.some(c => c.courseCode === course.courseCode);

    if (!courseExists) {
      {
        this.schema.set([...currentCourses, course]);
        return true;
      }
    }
    return false;
  }

  getTotPoints(): number {
    return this.schema().reduce((total, course) => total + course.points, 0);
  }

  getCourseCount(): number {
    return this.schema().length;
  }

  private loadFromStorage(): Course[] {
    const storedCourses = localStorage.getItem(this.storageKey);
    return storedCourses ? JSON.parse(storedCourses) : [];
  }

  deleteCourse(courseCode: string) {
    this.schema.set(this.schema().filter(c => c.courseCode !== courseCode));
  }

  clearCourses() {
    this.schema.set([]);
    localStorage.removeItem(this.storageKey);
  }
}
