import { client } from '@/sanity/lib/client';
import { BLOG_POSTS_QUERY } from '@/sanity/lib/queries';
import imageUrlBuilder from '@sanity/image-url';
import BlogClientPage from './BlogClientPage';

const builder = imageUrlBuilder(client);

export default async function BlogPage() {
  const posts = await client.fetch(BLOG_POSTS_QUERY);

  // Map through posts and pre-generate the image URL string on the server
  const formattedPosts = posts.map((post: any) => ({
    ...post,
    mainImageUrl: post.mainImage ? builder.image(post.mainImage).url() : null,
  }));

  return <BlogClientPage posts={formattedPosts} />;
}