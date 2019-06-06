import { Component } from '@angular/core';
import Post from '../Models/Post';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent {
    title = 'TP_Application de type blog';
    constructor() {
        var firebaseConfig = {
            apiKey: "AIzaSyDDVwXcTuh7Y3d0HfIFjy9KuqtfJ-USEZ8",
            authDomain: "ocangularexoblog.firebaseapp.com",
            databaseURL: "https://ocangularexoblog.firebaseio.com",
            projectId: "ocangularexoblog",
            storageBucket: "ocangularexoblog.appspot.com",
            messagingSenderId: "477842756408",
            appId: "1:477842756408:web:082e1b828d70d0d2"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    // je déclare mes posts à afficher partir de mon type Post (cf models/post)
    // je choisi les différentes manières de faire pour pouvoir m'en souvenir un jour
    postOne: Post = {
        title: 'Mon premier post',
        content: 'Voici mon premier post! Clique à gauche ou droite pour me dire si tu as aimé ou non !',
        loveIts: 0,
        created_at: new Date()
    };
    postTwo = new Post('Mon deuxième post', 'Voici mon deuxieme post! Clique à gauche ou droite pour me dire si tu as aimé ou non !');
    postThree = new Post('Encore un post', 'Sujet politique ? ... Oh non je n\'oserai pas! Clique à gauche ou droite pour me dire si tu as aimé ou non !');

    // je crée mon array des posts en le typant
    // ainsi on ne peut pas ajouter autre chose qu'un post
    postsList: Post[] = [
        this.postOne, this.postTwo, this.postThree
    ];
}

