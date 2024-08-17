import Link from 'next/link';
import { getAllPosts } from './blog/blogData';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="container">
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>

      <br />

      <h2 className='underline'>記事一覧</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}