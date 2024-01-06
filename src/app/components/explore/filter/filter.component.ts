import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {UiService} from "../../../services/ui.service";
import {LocalService} from "../../../services/local.service";
import {UserService} from "../../../services/user.service";
import {lastValueFrom} from "rxjs";
import {Project} from "../../../model/Project";
import {DataService} from "../../../services/data.service";
import {Router} from "@angular/router";

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
  categories: any = {
    1: "all",
    2: "tech_innovation",
    3: "audio",
    4: "camera_gear",
    5: "education",
    6: "energy_green_tech",
    7: "fashion_wearables",
    8: "food_beverages",
    9: "health_fitness",
    10: "home",
    11: "phones_accessories",
    12: "productivity",
    13: "transportation",
    14: "travel_outdoors",
    15: "creative_works",
    16: "art",
    17: "comics",
    18: "dance_theater",
    19: "film",
    20: "music",
    21: "photography",
    22: "podcasts_blogs_vlogs",
    23: "tabletop_games",
    24: "video_games",
    25: "web_series_tv_shows",
    26: "writing_publishing",
    27: "community_projects",
    28: "culture",
    29: "environment",
    30: "human_rights",
    31: "local_businesses",
    32: "wellness"
    // Add more categories as needed
  }


  constructor(private filterService: UiService,
              private userService: UserService,
              private dataService: DataService,
              private router: Router,
              private uiService: UiService) {
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
    }
  }

  async handle(num: number) {
    let cat_name = this.categories[num];

    await lastValueFrom(this.userService.getCampaignByFilter(cat_name))
      .then(async (resp) => {
        this.dataService.fetchCampaign(resp);
        await this.router.navigate(["/explore", cat_name]);
      }).catch(async (err) => {
        this.dataService.fetchCampaign([]);
        await this.router.navigate(["/explore", cat_name]);
      });
  }

}
