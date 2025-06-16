import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authService: AuthService){

  }
}
