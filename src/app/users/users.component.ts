import { Component, OnInit, } from '@angular/core';
import { GithubUsers } from "../github-users";
import { GithubService } from "../service/github/github.service";
import { GithubRepos } from "../github-repos";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchUsers = true;

  githubUsers: GithubUsers;
  githubRepos: GithubRepos;
  userName: string;

  constructor(private githubUserServive: GithubService, private githubRepoServive: GithubService) { }

  search(userName) {
    this.githubUserServive.getUser(userName).then((success) => {
      this.githubUsers = this.githubUserServive.updateUsers;
    },
      (error) => {
        alert("username not found");
        console.log(error)
      })

    this.githubRepoServive.getRepo(userName).then((results) => {
      this.githubRepos = this.githubRepoServive.updateRepo;
    },
      (error) => {
        console.log(error);
      })
  }

  ngOnInit() {
    this.search('OwinoLucas');
  }

}
