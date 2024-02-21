import { getBlogEntries, getBlogEntry } from "@/lib/get-blog-entries";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function generateStaticParams() {
  const blogEntries = await getBlogEntries();
  const posts = blogEntries.items

  return posts.map(post => ({
    slug: post.fields.slug
  }))
}

export default async function BlogPage({ params }: { params: { slug: string } }) {

  const { slug } = params;
  const blogEntry = await getBlogEntry(slug);
  const { title, subtitle, publishDate, readTime, postContent } = blogEntry.fields

  return (
    <div>
        <h1 className="text-5xl font-bold">{title}</h1>
        <small>{subtitle}</small>
        <p>Publish Date: {publishDate}</p>
        <p>Read Time: {readTime}</p>

        <div className="prose">
         { documentToReactComponents(postContent) }
        </div>
    </div>
  )
}