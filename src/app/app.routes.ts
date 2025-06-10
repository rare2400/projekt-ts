import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseListComponent } from './pages/course-list/course-list.component';

export const routes: Routes = [
    { path: 'Hem', component: HomeComponent },
    { path: 'Kurser', component: CoursesComponent },
    { path: 'Ramschema', component: CourseListComponent },
    { path: '**', redirectTo: '/Hem', pathMatch: 'full' },
    { path: '', redirectTo: '/Hem', pathMatch: 'full' }
];
