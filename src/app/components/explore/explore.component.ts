import { Component } from '@angular/core';
import {FilterComponent} from "./filter/filter.component";
import {SearchComponent} from "./search/search.component";
import {CampaignsComponent} from "./campaigns/campaigns.component";
import {FilterSettingComponent} from "./filter-setting/filter-setting.component";

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    FilterComponent,
    SearchComponent,
    CampaignsComponent,
    FilterSettingComponent
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
