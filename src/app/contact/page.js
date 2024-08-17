import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container">
      <h1>Contact ページ</h1>
      <Link href="/" className='underline'>Back to Home</Link>
    </div>
  );
}