import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // need to use http client service

const BASE_URL = 'http://node-hnapi.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private http: Http) { }

  getLatestStories(page: number = 1) {
    return this.http.get(`${BASE_URL}/news?page=${page}`);
  }

}
