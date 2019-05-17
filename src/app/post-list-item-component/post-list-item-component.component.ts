import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/Models/Post';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() post: Post;

    constructor() { }
    clickLike() {
        this.post.loveIts += 1;
    }
    clickUnlike() {
        this.post.loveIts -= 1;
    }
    ngOnInit() {
    }

}
