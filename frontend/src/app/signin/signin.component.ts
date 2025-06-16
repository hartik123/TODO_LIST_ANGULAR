import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../authservice/auth.service';
import { User, UserService } from '../userservice/user.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  @Input() isLoggedIn: boolean = false;
  userId: string = '';
  password: string = '';

  constructor(private http:HttpClient, private router: Router, private authService: AuthService, private userService: UserService){}

  handleLogin(): void {
    this.http.post<any>('http://localhost:3000/user/login', {
      username: this.userId,
      password: this.password
    })
    .subscribe({
      next: (response: any) => {
        const token = response.token;
        this.authService.setToken(token);
        const userData = response && response.user? response.user : response;
        const loggedInUser:User = {
          userId: userData._id,
          firstName: userData.firstName,
          lastName: userData.lastName,
          age: userData.age,
          address: userData.address,
          phoneNumber: userData.phoneNumber,
          email: userData.email,
          username: userData.username,
          password: userData.password
        }
        this.userService.setUser(loggedInUser);
        // Redirect to home page after successful login
        this.authService.login(response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log("Error Logging In");
        alert("Error Logging In, Please check your credentials");
      }
    });
  }

}
