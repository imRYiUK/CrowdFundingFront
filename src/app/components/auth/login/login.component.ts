import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {User} from "../../../model/User";
import {UserService} from "../../../services/user.service";
import {lastValueFrom} from "rxjs";
import {FormsModule} from "@angular/forms";
import {LocalService} from "../../../services/local.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    @Input() username: string;
    @Input() password: string;

    constructor(private userService: UserService, private localService: LocalService) {
    }

    async onSubmit() {
      const response = await lastValueFrom(this.userService.login({username: this.username, password: this.password}));
      if (response) {
        this.localService.saveData("token", response.token);
      }
    }
}
