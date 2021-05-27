import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseurl: string;
  constructor(private httpClient:HttpClient) { 
    this.baseurl= "https://jsonplaceholder.typicode.com/posts";
  }

  getAll(): Promise<any[]>{
    return this.httpClient.get<any[]>(this.baseurl).toPromise(); // to promise() pasar promesa
  }
  getForId(pId:number): Promise<any>{
    return this.httpClient.get<any>(`${this.baseurl}/${pId}`).toPromise();
  }
  post(pObject:any): Promise<any>{
    const bodyRequest = pObject;
    return this.httpClient.post<any>(this.baseurl,bodyRequest).toPromise();
  }
}


/*añadir en app.module httpclientmodule*/
// inyectar HttpClient