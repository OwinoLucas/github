import { Component, OnInit, } from '@angular/core';
import { GithubUsers } from "../github-users";
import { GithubService } from "../service/github/github.service";
import { error } from 'protractor';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchUsers = true;

  githubUsers: GithubUsers;
  userName: string;

  constructor(private githubUserServive: GithubService) { }

  search(userName) {
    this.githubUserServive.getUser(userName).then((success) => {
      this.githubUsers = this.githubUserServive.updateUsers;
    },
      (error) => {
        alert("username not found");
        console.log(error)
      })
  }

  ngOnInit() {
    this.search('OwinoLucas');
  }

}
