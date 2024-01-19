import {Component, OnInit} from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {CreaNavComponent} from "./crea-nav/crea-nav.component";
import {AuthService} from "../../services/auth.service";
import {lastValueFrom} from "rxjs";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {CreaSideContentComponent} from "./crea-side-content/crea-side-content.component";
import { LocalService } from '../../services/local.service';
import { CampaignService } from '../../services/campaign.service';
import { Project } from '../../model/Project';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-crea-camp',
  standalone: true,
  imports: [
    NavComponent,
    CreaNavComponent,
    RouterOutlet,
    CreaSideContentComponent,
    NgIf
  ],
  templateUrl: './crea-camp.component.html',
  styleUrl: './crea-camp.component.css'
})
export class CreaCampComponent implements OnInit{
  isOk: boolean = false;

  constructor(private localService: LocalService,
              private campService: CampaignService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  async ngOnInit() {
    let camp_id = this.route.snapshot.paramMap.get('id');
    if (camp_id) {
      await this.authService.verify();
      const user = this.localService.getData("user");
      if(user) {
        const camp: Project =  await lastValueFrom(this.campService.getCampaignById(parseInt(camp_id), JSON.parse(user).id));
        if (camp == null) {
          this.localService.removeData("camp");
          await this.router.navigate(["404_not_found"]);
          return;
        }
        //this.localService.removeData("camp");
        this.localService.saveData("camp", JSON.stringify(camp));
        this.isOk = true;
      } else {
        this.authService.redirectUrl = this.route.snapshot.url.join("/");
        await this.router.navigate(["login"]);
      }
    } else {
        await this.router.navigate(["404_not_found"]);
    }
   //if (camp_id) {
   //  this.category = cat_name;
   //  // console.log(cat_name)
   //  if (cat_name != "all") {
   //    console.log("what")
   //    await lastValueFrom(this.userService.getCampaignByFilter(cat_name))
   //    .then((resp)=> {
   //      this.dataService.fetchCampaign(resp);
   //    }).catch((err) => {
   //      this.dataService.fetchCampaign([])
   //    });
   //  }
  //}
  }
}
