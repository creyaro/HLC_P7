import { Component } from '@angular/core';
import { StudentsService } from '../../students.service';
import { CommonModule } from '@angular/common'; // lo necesitamos para poder usar la instrucción NgFor
import { FormsModule } from '@angular/forms'; // necesario para el two way binding

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {

  students: any[] = [];

  constructor(private readonly studentsService: StudentsService) {}

  ngOnInit(): void {
    this.studentsService.getStudents()
      .subscribe(data => {
        this.students = data;
      });
  }

}
