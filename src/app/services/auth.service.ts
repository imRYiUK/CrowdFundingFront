import { Injectable } from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalService} from "./local.service";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private localService: LocalService, private http: HttpClient, private userService: UserService) {
  }

  async verify() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const token = this.localService.getData("token");
    const response: any = await lastValueFrom(this.http.post<any>(this.userService.getApiAuth() + "/verify", {token: token}, {headers}));

    if (response == false) {
      this.localService.clearData();
      await this.router.navigate(["/login"])
    }
  }
}
