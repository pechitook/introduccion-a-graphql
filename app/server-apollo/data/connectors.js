import Sequelize from 'sequelize';
import rp from 'request-promise';
import { db } from '../db/db';
import { seed } from '../db/seed';

seed()

const Author = db.define('author', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
});

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
  },
  text: {
    type: Sequelize.STRING,
  },
  tags: {
    type: Sequelize.STRING,
  }
});


// Relations
Author.hasMany(Post);
Post.belongsTo(Author);

const FortuneCookie = {
  getOne(){
    return rp('http://fortunecookieapi.com/v1/cookie')
      .then((res) => JSON.parse(res))
      .then((res) => {
        return res[0].fortune.message;
      });
  },
};

export { Author, Post, FortuneCookie };
