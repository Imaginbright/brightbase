// interface Tag {
//   _id: string;
//   name: string;
// }

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string | number;
  title: string;
  tags: any;
  author: Author;
  answers: string | number;
  createdAt: Date;
  upvotes: number;
  views: number;
}
