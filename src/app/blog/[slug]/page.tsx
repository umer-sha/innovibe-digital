import { client } from '@/sanity/lib/client'
import { BLOG_POSTS_QUERY } from '@/sanity/lib/queries'
import { BLOG_POST_QUERY } from '@/sanity/lib/queries'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`)
  
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await client.fetch(BLOG_POST_QUERY, { slug: resolvedParams.slug })

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white pt-24 pb-32">
      <article className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link href="/blog" className="text-sm text-[#7d5aff] hover:underline inline-flex items-center gap-1 mb-8">
          &larr; Back to Insights & Updates
        </Link>

        {/* Category & Date */}
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
          {post.category && (
            <span className="bg-[#7d5aff]/20 text-[#7d5aff] font-semibold px-3 py-1 rounded-full border border-[#7d5aff]/30">
              {post.category}
            </span>
          )}
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          )}
          {post.readTime && (
            <>
              <span>•</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Main Cover Image */}
        {post.mainImage && (
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 border border-slate-800">
            <img 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 leading-relaxed text-base md:text-lg">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-slate-500 italic">No content written for this post yet.</p>
          )}
        </div>
      </article>
    </main>
  )
}