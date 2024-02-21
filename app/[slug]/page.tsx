import { Separator } from "@/components/ui/separator";
import { getBlogEntries, getBlogEntry } from "@/lib/get-blog-entries";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Calendar, Clock } from "lucide-react";

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
    <div className="flex flex-col items-center py-10 space-y-10">

      <header className="space-y-2">
        <h1 className="text-2xl text-center md:text-3xl font-bold">{title}</h1>
        <small className="text-center">{subtitle}</small>
        <div className="flex space-x-4 justify-center items-center">
          <p className="flex space-x-2 items-center"><Calendar size={20} /> <span>{publishDate}</span></p>
          <span>|</span>
          <p className="flex space-x-2 items-center"><Clock size={20} /> <span>{readTime}</span></p>
        </div>
      </header>

      <div className="prose prose-sm md:prose max-md:px-4">
        {documentToReactComponents(postContent)}
      </div>
    </div>
  )
}