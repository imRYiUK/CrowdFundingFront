import {Component, OnInit} from '@angular/core';
import {FilterComponent} from "./filter/filter.component";
import {SearchComponent} from "./search/search.component";
import {CampaignsComponent} from "./campaigns/campaigns.component";
import {FilterSettingComponent} from "./filter-setting/filter-setting.component";
import {LocalService} from "../../services/local.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {DataService} from "../../services/data.service";
import {lastValueFrom} from "rxjs";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    FilterComponent,
    SearchComponent,
    CampaignsComponent,
    FilterSettingComponent,
    NavComponent
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit{
  category: string;
  constructor(private localService: LocalService, private userService: UserService, private dataService: DataService, private router: Router, private route: ActivatedRoute) {

  }

  async ngOnInit() {
    let cat_name = this.route.snapshot.paramMap.get('name')
    if (cat_name) {
      this.category = cat_name;
      // console.log(cat_name)
      if (cat_name != "all") {
        console.log("what")
        await lastValueFrom(this.userService.getCampaignByFilter(cat_name))
          .then((resp)=> {
            this.dataService.fetchCampaign(resp);
          }).catch((err) => {
            this.dataService.fetchCampaign([])
          });

        // if (response)
        // console.log(response.toString() + "me")
      }
    }
  }
}
