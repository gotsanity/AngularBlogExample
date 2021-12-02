import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';

export interface BlogLink {
  id: string,
  title: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  posts: BlogLink[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.AllPosts$.subscribe(data => {
      this.posts = data.map(item => {
        return { id: item.id, title: item.title };
      });
    })
  }

}
