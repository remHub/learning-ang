import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post'; // import interface Post to minimize human errors


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: any;
  btnPrimary: string = '';

  /**
   * 
   * @param postService import service methods and/or properties
   */
  constructor(private postService: PostService) {
    this.posts = postService.postList;
    this.btnPrimary = postService.btnPrimary;
  }

  /**
   * Set Post interface as type to minimize human errors
   */
  addData() {
    let newPost: Post = { 
      id: 7, postTitle: 'Post 7'
    }
    
    this.postService.addPost(newPost);
  }

  removeData(rmv: number) {
    this.postService.removePost(rmv);
  }
}
