import { BlogService, BlogPost } from './../blog.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  @Output() onPostEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  blogForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
  }

  clearForm(): void {
    this.blogForm.setValue({
      title: '',
      body: ''
    });
  }

  onSubmit(): void {
    console.log(this.blogForm.value);
    let post: BlogPost = {
      title: this.blogForm.value.title,
      body: this.blogForm.value.body,
      id: "",
      created_on: new Date(),
      updated_on: undefined
    };

    this.blogService.createPost(post);
    this.clearForm();
    this.onPostEvent.emit(true);
  }

}
