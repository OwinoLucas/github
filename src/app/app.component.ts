import { Component } from '@angular/core';
import { GithubUsers } from "./github-users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public githubUser1: GithubUsers;

  constructor() {
    this.githubUser1 = new GithubUsers
  }
}
