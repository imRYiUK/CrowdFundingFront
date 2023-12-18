import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Project} from "../model/Project";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private showExploreRequest = new BehaviorSubject<Project[]>([]);
  private urlExplore = new BehaviorSubject<string>("all");

  currentRequest = this.showExploreRequest.asObservable();
  currentUrlExplore = this.urlExplore.asObservable();

  constructor() { }

  fetchCampaign(project: Project[]) {
    this.showExploreRequest.next(project)
  }

  giveTheUrl(url: string) {
    this.urlExplore.next(url)
  }
}
