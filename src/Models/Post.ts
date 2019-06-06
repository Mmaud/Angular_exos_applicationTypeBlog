// deux types de type possibles (class ou interface)
// dans les params du constructeurs je choisis de ne mettre que le titre et le contenu
// sachant que la date constitue la date de cr�ation du poste
// et le nombre de likes/unlikes est � 0 � la cr�ation du poste

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

    constructor(title:string , content:string) {
      this.title = title;
      this.content = content;
      this.loveIts = 0;
     //@TODO this.created_at = Date.now();

    }
}