import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubUsers } from "../github-users";
import { GithubService } from '../service/github/github.service';
import { rejects } from 'assert';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  @Input() githubUsers: GithubUsers
  @Output() userUpdated: EventEmitter<GithubUsers> = new EventEmitter<GithubUsers>();

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    if (this.githubUsers) {
      this.githubUsers.userName = 'invalid'
      this.getUserInfo();
    }
    // this.githubService.getUser()
    // this.githubUsers = this.githubService.githubUsers

  }



  searchUser() {
    if (this.githubUsers.userName && this.githubUsers.userName.length > 0) {
      this.githubService.updateUser(this.githubUsers.userName);
      this.getUserInfo();
    }
    else {
      this.githubUsers.userName = 'invalid';
    }

  }

  getUserInfo() {
    if (this.githubUsers.userName && this.githubUsers.userName.length > 0) {
      let promise = new Promise((resolve, reject) => {
        this.githubService.getUser().toPromise().then(response => {
          this.githubUsers.userName = this.githubUsers.userName;
          this.userUpdated.emit(this.githubUsers);

          resolve()
        },
          error => {
            this.githubUsers.userName = 'user name not founnd'

            reject(error)

          })
      })
      return promise
    }


  }

  // let promise = new Promise((resolve, reject) => {
  // this.http.get<GitResponse>(`${environment.url}`).toPromise().then(response => {
  //   this.githubUsers.userName = response.userName

  //   resolve()
  // },
  //   error => {
  //     this.githubUsers.userName = 'Enter valid user name'

  //    reject(error)
  //   })
  // })
  // return promise
}



