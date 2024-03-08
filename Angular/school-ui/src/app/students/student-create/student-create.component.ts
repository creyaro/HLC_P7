import { Component } from '@angular/core';
import { StudentsService } from '../../students.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // necesario para el two way binding

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {
  constructor(private readonly studentsService: StudentsService) {}

  student = {
    name: '',
    dni: '',
    birthDate: ''
  };

  onSubmit() {
    this.studentsService.createStudents(this.student).subscribe(() => {
      // Show success msg
    });
  }
}
