export const blogPosts = [
  {
    slug: "nextjs-introduction",
    title: "Next.jsの紹介",
    content: "Next.jsは、Reactベースのフレームワークで、高性能なウェブアプリケーションを簡単に構築できます。",
  },
  {
    slug: "react-hooks-explained",
    title: "React Hooksの解説",
    content: "React Hooksは、関数コンポーネントでステートやライフサイクルメソッドを使用できるようにする機能です。",
  },
  {
    slug: "javascript-async-await",
    title: "JavaScriptのasync/await",
    content: "async/awaitは、JavaScriptで非同期処理を簡潔に記述するための構文です。",
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts() {
  return blogPosts;
}