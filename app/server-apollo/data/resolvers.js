import { Author, Post, FortuneCookie } from './connectors';

const resolveFunctions = {
  Query: {
    author(_, { id }){
      return Author.findById(id);
    },
    fortuneCookie(){
      return FortuneCookie.getOne();
    },
  },
  Mutation: {
    createAuthor: (root, args) => { return Author.create(args); },
    createPost: (root, { authorId, tags, title, text }) => {
      return Author.findOne({ where: { id: authorId } }).then( (author) => {
        console.log('found', author);
        return author.createPost( { tags: tags.join(','), title, text });
      });
    },
  },
  Author: {
    posts(author){
      return author.getPosts();
    },
  },
  Post: {
    author(post){
      return post.getAuthor();
    },
    tags(post){
      return post.tags.split(',');
    }
  }
}

export default resolveFunctions;
