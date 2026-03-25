import Image from 'next/image';

const DEFAULT_IMAGE_URL = '/images/default.png';

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

interface PostListProps {
  posts: IPost[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <>
      {posts.map((post: IPost) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Image
            src={post.media?.url ?? DEFAULT_IMAGE_URL}
            alt={post.media?.alt ?? post.title}
            width={500}
            height={500}
            unoptimized={true}
          />
        </div>
      ))}
    </>
  );
}