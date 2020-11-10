import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Posts } from 'src/app/model/posts';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PostsService } from 'src/app/services/posts.services';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Posts[];
  showAddForm=false;
  addForm: FormGroup;
  filePath:String;
  constructor(private afs: AngularFireStorage,private postsservice: PostsService, private as: FirebaseService, private router: Router, private fb: FormBuilder, private ps: PostsService) {
    this.addForm = this.fb.group({
      'description': new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
      'upload': new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)])
    });
  }
  ngOnInit(){
    this.ps.getposts().subscribe(posts=>{
      this.posts=posts;
    })
  }
  logout() {
    this.as.LogOut()
  }

  addpost() {
    let newposts = new Posts(
      this.addForm.value
    )   
    this.afs.upload('/images'+Math.random()+this.filePath, this.filePath);
    this.postsservice.addPosts(newposts);
  }
  deletepost(post){
    this.postsservice.deletePost(post)
  }
  selectfile(event){
    console.log(event)
    this.filePath = event.target.files[0]
    console.log('this.filepath', this.filePath)
  }
}
