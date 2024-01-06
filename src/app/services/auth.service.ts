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
  redirectUrl: string;
  constructor(private router: Router, private localService: LocalService, private http: HttpClient, private userService: UserService) {
  }

  async verify() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    let bool_resp: boolean;
    const token = this.localService.getData("token");
    const response: any = await lastValueFrom(this.http.post<any>(this.userService.getApiAuth() + "/verify", {token: token}, {headers}));
    // console.log(response)

    if (response == false) {
      this.localService.clearData();
      return false;
    }

    return true
  }

  // verify() {
  //   const token = this.localService.getData("token");
  //
  //   if (token) {
  //     const payload = atob(token.split('.')[1]);
  //     const parsedPayload = JSON.parse(payload);
  //     return parsedPayload.exp >
  //   } else {
  //     return false;
  //   }
  // }
}
