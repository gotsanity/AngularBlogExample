import { BlogPost, BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  id: string = "";
  post: BlogPost = {
    title: "",
    body: "",
    id: "",
    created_on: new Date(),
    updated_on: undefined
  };

  constructor(private router: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') as string;
    
    this.blogService.getPostById(this.id).subscribe(data => {
      this.post = data;
    })
  }

}