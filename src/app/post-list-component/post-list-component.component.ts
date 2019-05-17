import { Component, OnInit, Input } from '@angular/core';
import Post from '../../Models/Post';

@Component({
    selector: 'app-post-list-component',
    templateUrl: './post-list-component.component.html',
    styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
    // je passe mon array à PostListComponent
    @Input() posts: Post [];
    constructor() {
    }

    ngOnInit() {
        console.log(this.posts);
    }

}
