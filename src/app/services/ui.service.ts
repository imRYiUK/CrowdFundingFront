import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showFilterDrop = new BehaviorSubject<boolean[]>([false, false, false]);
  currentFilter = this.showFilterDrop.asObservable();

  constructor() { }


  changeFilter(filter: boolean[]) {
    this.showFilterDrop.next(filter)
  }

}
