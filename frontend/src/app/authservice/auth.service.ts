import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthService{
    isLoggedIn: boolean = false;

    constructor(private router: Router){}

    login(token: string): void {
        this.isLoggedIn = true;
        this.setToken(token);
    }

    logout(){
        localStorage.removeItem("authToken");
        this.isLoggedIn = false;
        this.router.navigate(['/signin']);
    }

    setToken(token: string): void{
        localStorage.setItem("authToken", token);
    }

    getToken():string | null{
        return localStorage.getItem("authToken");
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem("authToken");
    }
}