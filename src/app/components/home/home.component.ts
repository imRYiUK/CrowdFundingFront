import { Component } from '@angular/core';
import {FilterComponent} from "../explore/filter/filter.component";
import {SearchComponent} from "../explore/search/search.component";
import {ExploreComponent} from "../explore/explore.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FilterComponent,
    SearchComponent,
    ExploreComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
