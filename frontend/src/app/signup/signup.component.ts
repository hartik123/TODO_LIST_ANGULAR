import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthService} from '../authservice/auth.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, HttpClientModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userId: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  address: string = '';
  phoneNumber: string = '';
  email: string = '';

  constructor(private http:HttpClient, private router: Router, private authService: AuthService){}

  handleRegister():void{
    this.http.post('http://localhost:3000/user/register', {
      username: this.userId,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      address: this.address,
      phoneNumber: this.phoneNumber,
      email: this.email
    })
    .subscribe({
      next:(response)=>{
        console.log(response)
        console.log('registered Successfully');
        // this.authService.login(response.token);
        this.router.navigate(['/home']);
      },
      error:(error)=>{
        console.log("Error in registering");
      }
    })
  }
}
