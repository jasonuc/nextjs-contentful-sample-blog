export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 p-10">
      <h1 className="font-bold text-3xl">Next.JS + Contentful Sample Blog</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <p>Blog posts go here</p>
      </div>
    </main>
  );
}
