import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  data: any;
  dataDeUno: any;
  bodyrequest: any;
  constructor(private postservice: PostsService) {
    this.bodyrequest = {
      title: "nuevo titulo",
      body: "jhsdfj",
      userId: 40404
    }
  }

  async ngOnInit() {
    try {
      this.data = await this.postservice.getAll();
      console.log(this.data);

    } catch (error) {
      console.log(error);

    }
  }

  async onClick(e: number) {
    try {
      this.data = [await this.postservice.getForId(e)];
    } catch (error) {
      console.log(error);
    }
  }

  async postClick() {
    try {
      const result = await this.postservice.post(this.bodyrequest);
      console.log(result);
      
    } catch (error) {
      console.log(error);
    }
  }

}

/**
 * metodos
get, post,put,patch,delete
url
headers
body
 */