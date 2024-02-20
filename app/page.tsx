import { getBlogEntries } from "@/lib/get-blog-entries";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const blogEntries = await getBlogEntries();
  const posts = blogEntries.items
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 p-24">
      <h1 className="font-bold text-3xl">Blog Posts</h1>

      <div className="mt-10 grid grid-cols-2 gap-10">

        {posts.map((post) => (
          <Link href={`/${post.fields.slug}`} key={post.sys.id} className="relative aspect-square min-w-80 flex flex-col items-center justify-center space-y-3 rounded border backdrop-blur-md">
            <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
            <h2 className="text-xl">{post.fields.title}</h2>
            <small>{post.fields.title}</small>
            <p>Read time: {post.fields.readTime}</p>
            <p>Publish date: {post.fields.publishDate}</p>
          </Link>
        ))}

      </div>
    </main>
  );
}
