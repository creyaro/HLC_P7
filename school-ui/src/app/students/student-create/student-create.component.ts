import { Component } from '@angular/core';
import { StudentsService } from '../../students.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // necesario para el two way binding
import { Subscriber, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  message='';

  onSubmit() {
    this.studentsService.createStudent(this.student).subscribe(e => {
      // Show success msg
      this.message = '';
      console.log(e);
    }, err => {
      console.log(err);
    });
  }
}