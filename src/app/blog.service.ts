import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface BlogPost {
  title: string,
  body: string,
  id: string,
  created_on: Date,
  updated_on: Date | undefined
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl: string = "http://73.19.65.35:3500/api";

  AllPosts$: Subject<BlogPost[]> = new Subject<BlogPost[]>();

  constructor(private http: HttpClient) { }

  // read all
  getAllPosts() {
    this.http.get<BlogPost[]>(`${this.apiUrl}/post`).subscribe(data => {
      this.AllPosts$.next(data);
    })
  }

  // read one
  getPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/post/${id}`);
  }

  // create
  createPost(item: BlogPost) {
    this.http.post<BlogPost>(`${this.apiUrl}/post`, item).subscribe(data => {
      this.getAllPosts();
    })
  }

  // update
  updatePost(item: BlogPost) {
    this.http.patch<BlogPost>(`${this.apiUrl}/post/${item.id}`, item).subscribe(data => {
      this.getAllPosts();
    })
  }

  // delete
  deletePost(id: string) {
    this.http.delete(`${this.apiUrl}/post/${id}`).subscribe(data => {
      console.log("delete subscribed", data);
      this.getAllPosts();
    })
  }
}
