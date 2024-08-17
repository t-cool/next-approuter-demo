import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <Link href="/" className='underline'>Back to Home</Link>
    </div>
  );
}