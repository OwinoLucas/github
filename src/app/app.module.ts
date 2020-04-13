import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpClientModule } from "@ngx-progressbar/http-client";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubService } from './service/github/github.service';
import { ReposComponent } from './repos/repos.component';
import { DateAgoPipe } from './date-ago.pipe';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GithubSearchComponent,
    ReposComponent,
    DateAgoPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
