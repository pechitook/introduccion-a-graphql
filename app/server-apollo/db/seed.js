import _ from 'lodash';
import casual from 'casual';
import { Author } from '../data/connectors';
import { db } from './db'

export const seed = () => {
  casual.seed(123);
  db.sync({ force: true }).then(()=> {
    _.times(10, ()=> {
      return Author.create({
        firstName: casual.first_name,
        lastName: casual.last_name,
      }).then(author => {
        return author.createPost({
          title: `A post by ${author.firstName} ${author.lastName}`,
          text: casual.sentences(3),
          tags: casual.words(3).split(' ').join(','),
        });
      });
    });
  });
}
