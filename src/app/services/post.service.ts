import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  btnPrimary: string = `m-2 bg-gradient-to-b from-blue-400 to-blue-800 text-white py-1 px-2 font-thin rounded-md outline outline-1 outline-blue-950 shadow-lg shadow-slate-500 hover:shadow-none hover:translate-y-1 duration-200 focus:bg-gradient-to-t focus:from-blue-700 focus:to-blue-900 focus:shadow-none focus:translate-y-1`

  postList: {}[] = [
    {id: 1, postTitle: 'Post 1'},
    {id: 2, postTitle: 'Post 2'},
    {id: 3, postTitle: 'Post 3'},
    {id: 4, postTitle: 'Post 4'},
    {id: 5, postTitle: 'Post 5'},
    {id: 6, postTitle: 'Post 6'}
  ]

  addPost(data: any) {
    this.postList.push(data);
  }

  removePost(rmv: number) {
    this.postList.splice( rmv, 1 )
  }

  constructor() { }
}
