import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/User";
import {Project} from "../model/Project";
import {LocalService} from "./local.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlAuth : string  = 'http://localhost:8085/api/auth';
  private apiUrl : string  = 'http://localhost:8080';
  constructor(private http: HttpClient, private localService: LocalService) {

  }

  registerUser(user: User) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<User>(this.apiUrlAuth + "/register", user, {headers})
  }

  login(identifiers: { password: string; username: string }) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(this.apiUrlAuth + "/authenticate", identifiers, {headers})
  }

  getCampaignByFilter(num: number) {
    const token = this.localService.getData("token");
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return this.http.get<Project[]>(this.apiUrl + "/project/" + num , {headers})
  }

}
