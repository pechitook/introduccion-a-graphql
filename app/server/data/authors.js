const authors = []

authors.push({
  id: 1,
  name: 'Nico Isnardi',
  twitterHandle: '@isnardi'
})

authors.push({
  id: 2,
  name: 'Cris Duran',
  twitterHandle: '@crisduran'
})

authors.push({
  id: 3,
  name: 'JP',
  twitterHandle: '@jp'
})

authors.push({
  id: 4,
  name: 'Ale Oviedo',
  twitterHandle: '@a0viedo'
})

export const getAuthorById = (id) => authors.find(a => a.id === id)
export const getAuthors = () => authors
export const createAuthor = (author) => ({
  id: Math.floor(Math.random() * 1000),
  name: author.name,
  twitterHandle: author.twitterHandle
})
