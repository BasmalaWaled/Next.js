import { notFound } from 'next/navigation';

type Params = {
  params: {
    id: string;
  };
};

const getPost = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return null;
  return res.json();
};

export default async function PostPage({ params }: Params) {
  const post = await getPost(params.id);

  if (!post) return notFound();

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Address:{post.title}</h1>
      <p className="text-lg text-gray-700 mb-4">conten:{post.content}</p>
      <p className="text-sm text-gray-500">✍️ Author: {post.author.name}</p>
    </main>
  );
}
