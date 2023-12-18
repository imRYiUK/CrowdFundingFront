import {Component, OnInit} from '@angular/core';
import {CampaignComponent} from "../../campaign/campaign.component";
import {ActivatedRoute, Data} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Project} from "../../../model/Project";
import {UserService} from "../../../services/user.service";

import {NgForOf, NgIf} from "@angular/common";
import {UiService} from "../../../services/ui.service";
import {debounceTime, take} from "rxjs";

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    CampaignComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent implements OnInit{
  campaigns: Project[]
  url: string
  error_not_found: boolean = false;
  loading: boolean = true;
  constructor(private dataService: DataService,
              private userService: UserService,
              private route: ActivatedRoute,
              private uiService: UiService) {
  }

  async ngOnInit() {
    // console.log("hkj")
    this.dataService.currentRequest.pipe(
      debounceTime(500)
    )
      .subscribe((projects) => {
        // console.log("what")
        this.loading = true;
        this.error_not_found = false;

        setTimeout(() => {
          this.campaigns = projects;
          this.loading = false;
          this.error_not_found = this.campaigns.length == 0;
        }, 500)
        console.log(projects.length)
      })
    console.log(this.error_not_found);
  }


}
