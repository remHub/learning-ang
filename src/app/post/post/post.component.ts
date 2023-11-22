import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';


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

  addNewData() {
    let newPost = { id: 7, postTitle: 'Post 7'}
    this.postService.addPost(newPost);
  }

  removeData(rmv: number) {
    this.postService.removePost(rmv);
  }
}
