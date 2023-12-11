import { Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {ExploreComponent} from "./components/explore/explore.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404_not_found', component: NotFoundComponent},
  { path: '**', redirectTo: '404_not_found', pathMatch: 'full' },
];
