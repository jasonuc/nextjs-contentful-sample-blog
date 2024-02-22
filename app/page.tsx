import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPostInterface, getBlogEntries } from "@/lib/get-blog-entries";
import { Entry } from "contentful";
import Link from "next/link";

export default async function Home() {

  const blogEntries = await getBlogEntries();
  const posts: Entry<BlogPostInterface, undefined, string>[] = blogEntries.items

  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 p-10">
      <h1 className="font-bold text-3xl">Next.JS + Contentful Sample Blog</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {posts.map((post) => (
          <Link href={`/${post.fields.slug}`} key={post.sys.id} className="">
            <Card className="hover:shadow-xl transition-all duration-300 ease-in-out min-h-[12rem]">
              <CardHeader>
                <CardTitle>{post.fields.title}</CardTitle>
                <CardDescription>{post.fields.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Read time:</strong>  <span className="underline underline-offset-2">{post.fields.readTime}</span></p>
                <p><strong>Publish date:</strong> <span className="underline underline-offset-2">{post.fields.publishDate}</span></p>
              </CardContent>
            </Card>
          </Link>
        ))}

      </div>
    </main>
  );
}
