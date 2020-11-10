import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs/observable';
import { Posts } from '../model/posts';
import 'rxjs/Rx';



@Injectable({
    providedIn: 'root'
})
export class PostsService {
    postsCollection: AngularFirestoreCollection<Posts>;
    postdoc: AngularFirestoreDocument<Posts>;
    posts: Observable<Posts[]>;
    constructor(public af: AngularFirestore) {
         this.postsCollection = this.af.collection('posts');

         this.posts=this.af.collection('posts').snapshotChanges().map(changes=>{
            return changes.map(a=>{
                const data=a.payload.doc.data() as Posts;
                data.id=a.payload.doc.id;
                return data;
            });
        })
    }
    getposts() {
        return this.posts;
    }
    addPosts(posts: Posts){
        this.postsCollection.add({
            description: posts.description,
            upload: posts.upload
          });
    }
    deletePost(post:Posts){
        this.postdoc=this.af.doc(`posts/${post.id}`);
        this.postdoc.delete();
    }
}