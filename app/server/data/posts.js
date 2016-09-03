import { getAuthorById } from './authors'

const posts = []

posts.push({
  id: 1,
  title: 'Primer post',
  author: getAuthorById(1)
})

posts.push({
  id: 2,
  title: 'Segundo post',
  author: getAuthorById(2)
})

posts.push({
  id: 3,
  title: 'Tercer post',
  author: getAuthorById(3)
})

posts.push({
  id: 4,
  title: 'Cuarto post',
  author: getAuthorById(4)
})

export const getPostById = (id) => posts.find(p => p.id === id)
export const getPosts = () => posts
export const createPost = (post) => ({
  id: Math.floor(Math.random() * 1000),
  title: post.title
})
