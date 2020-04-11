import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUsers } from "../../github-users";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  updateUsers: GithubUsers
  access_token: string = environment.access_token;

  constructor(private http: HttpClient) {
    this.updateUsers = new GithubUsers('', '', '', '', '', '', 0, 0, 0, new Date())
  }

  //this gets user info of userName typed
  getUser(userName: string) {
    interface GitResponse {
      url: string;
      name: string;
      email: string;
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<GitResponse>('https://api.github.com/users/' + userName + '?access_token=' + environment.access_token).toPromise().then((result) => {
        this.updateUsers = result;
        console.log(this.updateUsers);

        resolve();
      },
        error => {
          alert('There seems to be a problem');
          console.log(error)

          reject();
        })
    })
    return promise
  }




  // getRepos(): Observable<any>{
  //   if(this.userName){
  //     return this.http.get<any>(`${environment.url1}`)
  //    }
  //  }



}
