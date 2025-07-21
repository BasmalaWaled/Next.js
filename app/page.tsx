
// import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

const getPosts = async (): Promise<Post[]> => {
  const baseUrl = 'http://localhost:3000'; 

  const res = await fetch(`${baseUrl}/api/posts`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Failed to fetch posts:', errorText);
    throw new Error('Failed to fetch posts');
  }

  return res.json();
};

const HomePage = async () => {
  const posts = await getPosts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">📚 All Articles</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
  key={post.id}
  className="bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-8 space-y-4"
>
  <div className="text-sm text-gray-500 px-4 py-2 bg-gray-50 rounded-md">
  Author: <span className="font-medium text-gray-700">{post.author.name}</span>
  </div>
  <h2 className="text-2xl font-bold text-blue-800 tracking-tight px-4 py-2 bg-blue-50 rounded-md">
   Address: {post.title}
  </h2>
  <p className="text-gray-700 text-base leading-relaxed tracking-normal px-4 py-3 bg-gray-50 rounded-md">
  conten:  {post.content}
  </p>
</li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;

