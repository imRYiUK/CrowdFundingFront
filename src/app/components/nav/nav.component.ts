import { Component } from '@angular/core';
import {LocalService} from "../../services/local.service";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {CampaignService} from "../../services/campaign.service";
import {Project} from "../../model/Project";
import {lastValueFrom} from "rxjs";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private localService: LocalService,
              private router: Router,
              private authService: AuthService,
              private campService: CampaignService) {
  }
  disconnect() {
    this.localService.clearData();
    this.authService.redirectUrl = "";
    this.router.navigate(["/login"]);
  }

  async startCamp() {
    const camp = await this.campService.createCampaign();
    console.log(camp)
    const user = this.localService.getData("user");
    if (user){
      if (camp != null) {
        await this.router.navigate(["create-campaign", camp.id , "edit"])
      } else {
        console.log("ERROR WHILE CREATING CAMP" +  camp)
      }
    } else {
      this.disconnect();
    }
  }
}
