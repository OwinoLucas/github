import { Component, OnInit } from '@angular/core';
import { GithubService } from "../service/github/github.service";
import { GithubUsers } from "../github-users";
import { GithubRepos } from "../github-repos";


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userUsers = true;

  githubUsers: GithubUsers;
  githubRepos: GithubRepos;
  userName: string;

  constructor(public githubUserServive: GithubService, private githubRepoServive: GithubService) { }

  search(userName) {
    this.githubUserServive.getUser(userName).then((success) => {
      this.githubUsers = this.githubUserServive.updateUsers;
    },
      (error) => {
        console.log(error);
      })

    this.githubRepoServive.getRepo(userName).then((results) => {
      this.githubRepos = this.githubRepoServive.updateRepo;
    },
      (error) => {
        console.log(error);
      })
  }

  ngOnInit() {
  }

}
