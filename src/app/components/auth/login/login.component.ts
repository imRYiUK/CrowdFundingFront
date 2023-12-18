import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
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
export class LoginComponent implements OnInit {
    @Input() username: string;
    @Input() password: string;

    constructor(private router: Router, private userService: UserService, private localService: LocalService) {
    }

  async ngOnInit() {
    if (this.localService.getData("token")) {
      await this.router.navigate(["/explore", "all"])
    }
  }

    async onSubmit() {
      const response = await lastValueFrom(this.userService.login({username: this.username, password: this.password}));
      if (response) {
        this.localService.saveData("token", response.token);
        this.localService.saveData("user", JSON.stringify(response.userDTO));
        console.log(response)
        const redirectUrl = '/explore';
        await this.router.navigate([redirectUrl, "all"]);
      }
    }
}
