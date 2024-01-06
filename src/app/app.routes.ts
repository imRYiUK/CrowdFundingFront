import { Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {ExploreComponent} from "./components/explore/explore.component";
import {AuthGuard} from "./auth.guard";
import {CreaCampComponent} from "./components/crea-camp/crea-camp.component";
import {CheckAuthGuard} from "./check-auth.guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'explore/:name', component: ExploreComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'create-campaign/:id/:name', component: CreaCampComponent, canActivate: [CheckAuthGuard, AuthGuard] },
  { path: 'create-campaign/:id/:name/:part', component: CreaCampComponent, canActivate: [CheckAuthGuard, AuthGuard] },
  { path: '404_not_found', component: NotFoundComponent},
  { path: '', redirectTo: 'explore/all', pathMatch: 'full' },
  { path: '**', redirectTo: '404_not_found', pathMatch: 'full' },
];
