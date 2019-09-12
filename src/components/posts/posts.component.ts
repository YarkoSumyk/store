import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/services/posts.service';
import { IPost } from 'src/interfaces/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;
  post: IPost = {
    id: 10,
    title: 'Hello',
  };
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }
  newPost = (post) => {
    this.postsService.addPost(post);
    this.postsService.getPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  };
}
