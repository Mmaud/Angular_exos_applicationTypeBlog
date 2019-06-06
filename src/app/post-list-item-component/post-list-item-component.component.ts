import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import Post from 'src/Models/Post';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { post } from 'selenium-webdriver/http';


@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() post: Post;
    postsSubscription: Subscription;


    constructor(private postsService: PostsService) { }
    ngOnInit() {}

    clickLike() {
        this.post.loveIts += 1;
    }
    clickUnlike() {
        this.post.loveIts -= 1;
    }
    // supprimer un post
    onDeletePost(post: Post) {
        this.postsService.removePost(post);
    }
}
