import { Component, OnInit, Input } from '@angular/core';
import { GithubUsers } from "../github-users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() githubUsers: GithubUsers

  constructor() { }

  ngOnInit() {
  }

}
