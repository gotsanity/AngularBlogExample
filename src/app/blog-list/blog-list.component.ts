import { BlogPost, BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  list: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.AllPosts$.subscribe(data => {
      console.log('blog list refreshed');
      this.list = data;
    });
    this.blogService.getAllPosts();
  }

}
