import { MockList } from 'graphql-tools';
import casual from 'casual';

const mocks = {
  Int: () => casual.integer(1,1000),
  Author: () => ({
    firstName: () => casual.first_name,
    lastName: () => casual.last_name,
    posts: () => new MockList([1,6]),
  }),
  Post: () => ({
    tags: () => new MockList([1,3], () => casual.word),
    title: () => casual.title,
    text: () => casual.sentences(4),
  }),
  Query: () => ({
    author: (o, args) => {
      if (casual.integer(1,10) > 8){
        return null;
      }
      return { ...args };
    },
  }),
};

export default mocks;
