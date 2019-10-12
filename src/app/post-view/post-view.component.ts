import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(
    private route :ActivatedRoute,
    private service : PostService) { }
    post : any[];
  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>
      {
        let pid = +params.get('pid');
        console.log(pid);
        this.service.getPostBYID(pid)
        .subscribe(response =>
          {
            console.log(response.json());
            this.post = response.json();
          })
        
      })
  }

}
