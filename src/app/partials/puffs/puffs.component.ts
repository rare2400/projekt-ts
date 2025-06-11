import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-puffs',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './puffs.component.html',
  styleUrl: './puffs.component.css'
})
export class PuffsComponent {
  students: string = "/images/students.jpg";
  books: string = "/images/kimberly-farmer-books.jpg";
  distance: string = "/images/distans.jpg";
}
