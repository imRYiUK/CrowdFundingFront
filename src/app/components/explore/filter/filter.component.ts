import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {UiService} from "../../../services/ui.service";
import {LocalService} from "../../../services/local.service";
import {UserService} from "../../../services/user.service";
import {lastValueFrom} from "rxjs";
import {Project} from "../../../model/Project";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  filter: boolean[];
  com_filter: boolean[];
  tech_filter: boolean[];
  creat_filter: boolean[];

  constructor(private filterService: UiService, private userService: UserService) {
    this.com_filter = Array(12).fill(false);
    this.tech_filter = Array(11).fill(false);
    this.creat_filter = Array(5).fill(false);
  }

  ngOnInit() {
    this.filterService.currentFilter.subscribe(filter => this.filter = filter);
  }

  newFilter(num: number) {
    if (this.filter[num]) {
      this.filter.fill(false);
      this.filterService.changeFilter(this.filter);
    } else {
      this.filter.fill(false);
      this.filter[num] = true
      this.filterService.changeFilter(this.filter);

      this.tech_filter.fill(false);
      this.creat_filter.fill(false);
      this.com_filter.fill(false);
    }
  }

  async handle(cate: number, num: number) {

    if (cate == 0) {
      this.tech_filter.fill(false);
      this.tech_filter[num] = true;
    } else if (cate == 1) {
      this.creat_filter.fill(false);
      this.creat_filter[num-12] = true;
    } else {
      this.com_filter.fill(false);
      this.com_filter[num-23] = true;
    }

    const projects = await lastValueFrom(this.userService.getCampaignByFilter(num));
    console.log(projects);
  }

}
