import { Component, OnInit } from '@angular/core';
import { Message, PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  data: any;
  dataDeUno: any;
  bodyrequest: any;
  post: any;
  message: Message;
  constructor(private postservice: PostsService) {
    this.bodyrequest = {
      title: "nuevo titulo",
      body: "jhsdfj",
      userId: 40404
    }
    this.message = {
      title:"",
      message:""
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
      this.post = result;
    } catch (error) {
      console.log(error);
    }
  }
  async upDateClick() {
    try {
      const body = await this.postservice.put({ id: 1, title: "cambio", body: "cambio", userId: 5464 });
      this.post = body;
    } catch (error) {
      console.log(error);
    }
  }
  recived(){
    this.message = this.postservice.logMessage();
    console.log(this.message);
    
    
  }

}

/**
 * metodos
get, post,put,patch,delete
url
headers
body
 */