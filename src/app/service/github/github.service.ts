import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUsers } from "../../github-users";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  githubUsers: GithubUsers

  constructor(private http: HttpClient) {
    this.githubUsers = new GithubUsers();
  }

  getUser() {
    interface GitResponse {
      userName: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<GitResponse>(`${environment.url}`).toPromise().then(response => {
        this.githubUsers.userName = response.userName

        resolve()
      },
        error => {
          this.githubUsers.userName = 'Enter valid user name'

          reject(error)
        })
    })
    return promise
  }




  // getRepos(): Observable<any>{
  //   if(this.userName){
  //     return this.http.get<any>(`${environment.url1}`)
  //    }
  //  }

  updateUser(userName: string) {
    this.githubUsers.userName = this.githubUsers.userName;
  }


}
