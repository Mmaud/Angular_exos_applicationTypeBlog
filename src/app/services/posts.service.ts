import { Injectable } from '@angular/core';
import Post from 'src/Models/Post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable()
export class PostsService {
    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
    }

    // prend le contenu de l'array posts et l'émet à travers le subject
    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    // enregistrer les posts dans la BD
    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    // récup liste posts
    getPosts() {
        firebase.database().ref('/posts').on('value', (data) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        })
    }

    // recup un post 
    getSinglePost(id: number) {
        (resolve, reject) => {
            firebase.database().ref('/posts/' + id).once('value').then(
                (data: DataSnapshot) => {
                    resolve(data.val());
                }, (error) => {
                    reject(error);
                }
            );
        }
    }

    // créer post
    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    // supprimer un post
    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

}