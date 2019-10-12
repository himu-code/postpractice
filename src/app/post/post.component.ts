import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : any[];
 
  constructor(private service : PostService) { 
  
  }
  ngOnInit() {
    this.service.getPost()
    .subscribe(response =>
      {
        this.posts = response.json();
      })
  }
  createData(input: HTMLInputElement)
  {
    let post = {title: input.value}
   this.service.createPost(post)
    .subscribe(response =>
      {

        post['id']= response.json()
        console.log(response.json());
        this.posts.splice(0,0,post);
        console.log(this.posts);
      })
  }
  updateData(post)
  {
    this.service.updatePost(post)
    .subscribe(response =>
      {
        console.log(response.json());
      })
  }
  deleteData(post)
  {
    this.service.deletePost(post)
    .subscribe(response =>{
    let index = this.posts.indexOf(post);
    this.posts.splice(index , 1);
    console.log(response.json());
    })
      
    
  }

 

}
