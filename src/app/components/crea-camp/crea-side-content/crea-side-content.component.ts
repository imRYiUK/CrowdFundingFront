import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../../services/local.service';
import { Project } from '../../../model/Project';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-crea-side-content',
  standalone: true,
  imports: [NgIf],
  templateUrl: './crea-side-content.component.html',
  styleUrl: './crea-side-content.component.css'
})
export class CreaSideContentComponent implements OnInit{
  nameProject: string;
  name: string | null;
  part: string | null;
  constructor(private localService: LocalService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const campaign = this.localService.getData("camp");
    this.name = this.route.snapshot.paramMap.get('name');
    this.part = this.route.snapshot.paramMap.get('part');
    let ifCampaign: Project;
    if( campaign ) {
      console.log(this.name, this.part);
      ifCampaign = JSON.parse(campaign);
      this.nameProject = ifCampaign.name;
    }
  }
}
