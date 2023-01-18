import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import { IComment } from '../interfaces/IComment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments():Observable<IComment[]> {
    return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }


  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  
  // getUserById(id: number): Observable<IUser> | Observable<any> {
  //   return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/uTsers/${id}`).pipe(catchError( (err) => {
  //     console.log(err);
  //     const {status, message } = err;
  //     console.error(message);
  //     console.error(status);
  //     alert(message);
  //     return err;
  //   }))

  // }

    //* manejar el error en caso de que falle el endpoint
  //* pipe
  //* map
  //* filter
  //* catchError


}

    // return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);