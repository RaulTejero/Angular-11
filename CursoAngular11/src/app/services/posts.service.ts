import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Message {
  id?: number,
  title: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseurl: string;
  constructor(private httpClient: HttpClient) {
    this.baseurl = "https://jsonplaceholder.typicode.com/posts";
  }
  logMessage(): Message {
    const obj: Message = {
      id: 2,
      title: "mensje desde el servicio",
      message: "que tal estas?"
    }
    return obj
  }
  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseurl).toPromise(); // to promise() pasar promesa
  }
  getForId(pId: number): Promise<any> {
    return this.httpClient.get<any>(`${this.baseurl}/${pId}`).toPromise();
  }
  post(pObject: any): Promise<any> {
    const bodyRequest = pObject;
    //cabeceras
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }
    // retornas a la peticion los parametros (url, cuerpo, header)
    return this.httpClient.post<any>(this.baseurl, bodyRequest, httpOptions).toPromise();
  }
  put(pBody: any): Promise<any> {
    return this.httpClient.put<any>(`${this.baseurl}/${pBody.id}`, pBody).toPromise();
  }
}


/*añadir en app.module httpclientmodule*/
// inyectar HttpClient