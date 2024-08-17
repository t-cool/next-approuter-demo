import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contactページ</h1>
      <Link href="/" className='underline'>Back to Home</Link>
    </div>
  );
}