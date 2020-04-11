import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  userName: string
  @Output() userUpdated = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {

  }
  //the search fx for the event emitter
  search() {
    this.userUpdated.emit(this.userName);
    this.userName = '';
  }



}



