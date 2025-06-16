import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
    {path:'signin', component:SigninComponent},
    {path:'signup', component: SignupComponent},
    {path: 'profile', component:ProfileComponent, canActivate:[AuthGuard]}
]