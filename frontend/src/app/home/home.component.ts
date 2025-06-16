import { Component, OnInit } from '@angular/core';
import {HttpClientModule,  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../userservice/user.service';
import { Todo, TodoState } from '../../store/todo.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

export interface TodoResponse {
  id: string;
  title: string;
}

export interface TodoBackendResponse {
  _id: string;
  title: string;
  completed?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'todolist';
  todoList:TodoResponse[] = [];
  newTask: string = '';
  loading: boolean = true;
  isLoggedIn: boolean = false;
  currentUser: string = '';
  todos$: Observable<Todo[]>;

  constructor(private http:HttpClient, public router:Router, private userService: UserService, private store: Store<{ todoState: TodoState }>) {
        this.todos$ = this.store.pipe(select(state => state.todoState.todos));

   }

  ngOnInit(): void{
    // setTimeout(() => {
    //   this.fetchTodos();
    // }, 5000);
    this.fetchTodos();
    this.currentUser = this.userService.getCurrentUser()?.userId || '';
  }

  fetchTodos(): void{
    this.loading = true;
    this.userService.user$.subscribe(user=>{
      this.currentUser = user?.userId||'';
    })
    this.http.post<TodoBackendResponse[]>('http://localhost:3000/todo/getAll', {})
    .subscribe({
      next:(data)=>{
        this.todoList = data.map(todo=>{
          return {
            id: todo._id,
            title: todo.title
          }
        });
      },
      error:(error)=>{
        console.error('Error fetching todos:', error);
      }
    })
    this.loading = false;
  }

  addTask(): void {
    const trimmedTask = this.newTask.trim();
    if(trimmedTask){
      this.http.post<TodoResponse>('http://localhost:3000/todo/', {title: trimmedTask})
      .subscribe({
        next: (data)=>{
          this.fetchTodos();
          this.newTask = '';
          console.log(`Task "${trimmedTask}" added successfully.`);
        },
        error:(error)=>{
          console.log(`Error adding task "${trimmedTask}":`, error);
        }
      })
    }
    else{
      console.log('Task cannot be empty.');
      alert('Task cannot be empty.');
    }
  }

}
