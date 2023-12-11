import { Component } from '@angular/core';
import {CampaignComponent} from "../../campaign/campaign.component";

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    CampaignComponent
  ],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {

}
