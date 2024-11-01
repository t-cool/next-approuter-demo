import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../blogData';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container">
        <h1>記事が見つかりません</h1>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <article className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <br />
      <Link href="/" className='underline'>Back to Home</Link>
    </article>
  );
}