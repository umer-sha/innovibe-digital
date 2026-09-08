export const SERVICES_QUERY = `*[_type == "service"] | order(_createdAt asc){
  _id,
  title,
  description,
  "slug": slug.current
}`
export const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  category,
  readTime,
  publishedAt,
  excerpt,
  mainImage
}`

export const BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  readTime,
  publishedAt,
  mainImage,
  body
}`