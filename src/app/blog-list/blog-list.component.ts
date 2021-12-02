import { BlogPost, BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  list: BlogPost[] = [];
  isEditing: boolean = false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    // link
    this.blogService.AllPosts$.subscribe(data => {
      console.log('blog list refreshed');
      this.list = data;
    });
    
    // trigger
    this.blogService.getAllPosts();
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  deletePost(id: string) {
    this.blogService.deletePost(id);
  }

}
