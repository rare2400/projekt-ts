import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PuffsComponent } from '../../partials/puffs/puffs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatButtonModule, RouterLink, PuffsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  header: string = "/images/hero-image.jpg";

}
