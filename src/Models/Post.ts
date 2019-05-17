// deux types de type possibles (class ou interface)
// dans les params du constructeurs je choisis de ne mettre que le titre et le contenu
// sachant que la date constitue la date de création du poste
// et le nombre de likes/unlikes est à 0 à la création du poste

/*export default interface Post {
  title: string,
  content: string,
  loveIts: number,
  created_at: Date
} */

export default class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.created_at = new Date();
    }
}