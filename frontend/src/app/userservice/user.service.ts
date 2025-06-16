import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User{
  userId: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  phoneNumber: string;
  email: string;
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();


  setUser(user: User){
    this.userSubject.next(user);
  }

  clearUser(){
    this.userSubject.next(null);
  }

  getCurrentUser(): User | null{
    return this.userSubject.getValue();
  }
}
