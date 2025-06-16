import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoResponse } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() tasks: TodoResponse[] = [];
  @Output() fetchTodos = new EventEmitter<void>();
  faTrash = faTrash;

  constructor(private http:HttpClient){}

  deleteTask(todoId: string): void{
    this.http.delete('http://localhost:3000/todo/', {
      body: { id: todoId }
    })
    .subscribe({
      next: () => {
        this.fetchTodos.emit();
      },
      error:(error)=>{
        console.log('Error deleteing task:', error);
    }
    });
  }
}
