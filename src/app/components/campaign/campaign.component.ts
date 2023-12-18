import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../model/Project";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css'
})
export class CampaignComponent implements OnInit{
  @Input() project: Project;
  days: number;
  percent: string;


  constructor() {

  }


  ngOnInit() {
    let letter = this.project.fundStart
    let date = new Date(String(letter).replaceAll('-', '/'))
    let now = new Date();
    this.percent = this.convertPercentageToTwelfth((this.project.actualFund / this.project.fundTarget) * 100);
    // @ts-ignore
    const diffTime = Math.floor(Math.abs((now - date) / 1000 / 60 / 60 / 24));
    this.days = diffTime;
  }

  protected readonly Math = Math;
  convertPercentageToTwelfth(percent: number) {
    return `${Math.ceil((percent / (100/12) ))}/12`;
  }
}

