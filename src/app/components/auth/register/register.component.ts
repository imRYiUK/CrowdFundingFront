import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {User} from "../../../model/User";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  steps: boolean[];
  index: number;

  @Input() name: string;
  @Input() surname: string;
  @Input() phone_number: string;
  @Input() username: string;
  @Input() email: string;
  @Input() password: string;


  constructor(private userService: UserService) {
    this.steps = Array(3).fill(false);
    this.index = 0;
    this.steps[0] = true;
  }

  ngOnInit() {

  }

  addOne(event: MouseEvent) {
    event.preventDefault();
    this.index += 1;
    this.steps.fill(false);
    this.steps[this.index] = true;
  }

  deductOne(event: MouseEvent) {
    event.preventDefault();
    this.index -= 1;
    this.steps.fill(false);
    this.steps[this.index] = true;
  }

  async onSubmit() {
    const user: User = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phone_number: this.phone_number,
      username: this.username,
      password: this.password,
    }

    const response = await lastValueFrom(this.userService.registerUser(user));

    this.username = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.phone_number = "";
    this.surname = "";

    this.index = 0;
    this.steps.fill(false);
    this.steps[this.index] = true;
    console.log(user, response);
  }
}
