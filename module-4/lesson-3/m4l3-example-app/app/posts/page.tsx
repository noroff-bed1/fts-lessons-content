import { POSTS_API_URL } from '@/lib/constants';
import { cookies } from 'next/headers';
import PostList from '@/components/PostList';

interface IPost {
  title: string;
  body: string;
  tags: string[];
  media: { url: string; alt: string } | null;
  created: string;
  updated: string;
  id: number;
  _count: any;
}

async function Posts() {
  const token = cookies().get('token')?.value;
  const response = await fetch(POSTS_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": process.env.API_KEY ?? "",
    },
  });
  const posts = await response.json();

  return (
    <main>
      <h1>Posts route</h1>
      <PostList posts={posts.data} />
    </main>
  );
}

export default Posts;