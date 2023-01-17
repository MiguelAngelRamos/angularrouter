import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  //* manejar el error en caso de que falle el endpoint

  getUserById(id: number): Observable<IUser> {
    //* alt + 96 
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
    // return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }


}