import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  //* manejar el error en caso de que falle el endpoint

}