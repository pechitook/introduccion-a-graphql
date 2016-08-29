const posts = []

posts.push({
  id: 1,
  title: 'Primer post'
})

posts.push({
  id: 2,
  title: 'Segundo post'
})

posts.push({
  id: 3,
  title: 'Tercer post'
})

export const getPostById = (id) => posts.find(p => p.id === id)
export const getPosts = () => posts
export const createPost = (post) => ({
  id: Math.floor(Math.random() * 1000),
  title: post.title
})
