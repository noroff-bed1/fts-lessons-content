import { POSTS_API_URL } from '@/lib/constants';
import { cookies } from 'next/headers';
import Image from 'next/image';

interface IPost {
  title: string;
  body: string;
  tags: string[];
  media: string;
  created: string;
  updated: string;
  id: number;
  _count: any;
}

async function Posts() {
  const token = cookies().get('token')?.value;
  const response = await fetch(POSTS_API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const posts = await response.json();
  return (
    <main>
      <h1>Posts route</h1>
      {posts.map((post: IPost) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {post.media && (
            <Image
              src={post.media}
              alt={post.title}
              width={500}
              height={500}
              unoptimized={true}
            />
          )}
        </div>
      ))}
    </main>
  );
}

export default Posts;
