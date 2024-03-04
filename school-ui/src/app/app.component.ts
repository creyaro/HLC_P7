import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {StudentsListComponent} from './students/students-list/students-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsListComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'School Ui';
}
