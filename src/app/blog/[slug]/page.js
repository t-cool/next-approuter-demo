import Link from 'next/link';
import { getPostBySlug } from '../blogData';

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div>
        <h1>記事が見つかりません</h1>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <br />
      <Link href="/" className='underline'>Back to Home</Link>
    </article>
  );
}