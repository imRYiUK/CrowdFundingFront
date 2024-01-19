import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import {User} from "../model/User";
import {LocalService} from "./local.service";
import { Project } from '../model/Project';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService implements OnInit {
  constructor(private localService: LocalService, private http: HttpClient, private userService: UserService) {
     }

     ngOnInit(): void {
           }

  async createCampaign() {
    const token = this.localService.getData("token");
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    })
    const user = this.localService.getData("user");
    if (user) {
      let new_user = JSON.parse(user);
      console.log(new_user);
      const postObservable : Project = await lastValueFrom( this.http.post<any>(
        this.userService.getApi() + "/project/create",
        {isActive: false, creator: new_user},
        {headers}));

      return postObservable;
    }
    return null;
  }

  getCampaignById(id_camp: number, id_user: number) {
    const token = this.localService.getData("token");
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    })
    return this.http.get<Project>(
      this.userService.getApi() + "/project/" + id_camp + "/" + id_user,
      {headers})
  }




}
