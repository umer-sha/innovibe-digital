export const blogPost = {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'category',
      title: 'Category Tag (e.g., AI Technology)',
      type: 'string',
    },
    {
      name: 'readTime',
      title: 'Read Time (e.g., 3 min read)',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      title: 'Blog Body Content',
      type: 'array',
      of: [{ type: 'block' }], // This adds the full rich-text editor back
    },
  ],
}