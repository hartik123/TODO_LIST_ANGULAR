import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../userservice/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
    user: User | null = null;

    constructor(private userService: UserService, private http: HttpClient) { 
    }

    ngOnInit() {
      // this.userService.user$.subscribe(user => {
      //   console.log("User from UserService:", user);
      //   this.user = user;
      // });

      this.http.post<User>('http://localhost:3000/user/getprofile', {})
      .subscribe({
        next: (data:User) => {
          console.log("User data from backend:", data);
          this.user = data;
        }
      });   
    }
}
