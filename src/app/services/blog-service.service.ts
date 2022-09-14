import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  API_URL = " http://localhost:3000/post";
  constructor(private httpclient : HttpClient) { 

  }

  getData(){
    return this.httpclient.get(this.API_URL);
  }

  
}
