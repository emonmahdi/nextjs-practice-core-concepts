import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Understanding JavaScript Closures: A Beginner's Guide",
    slug: "understanding-javascript-closures",
    author: "John Doe",
    date: "2025-02-13",
    category: "JavaScript",
    content:
      "JavaScript closures are a fundamental concept that allows functions to retain access to their lexical scope even when executed outside of their original scope...",
    tags: ["JavaScript", "Closures", "Scope", "Functions"],
  },
  {
    id: 2,
    title: "React Performance Optimization: Best Practices",
    slug: "react-performance-optimization",
    author: "Jane Smith",
    date: "2025-02-13",
    category: "React",
    content:
      "Optimizing React applications is crucial for better performance. Techniques such as memoization, lazy loading, and avoiding unnecessary re-renders can help...",
    tags: ["React", "Performance", "Optimization", "Memoization"],
  },
  {
    id: 3,
    title: "Introduction to RESTful APIs: A Complete Guide",
    slug: "introduction-to-restful-apis",
    author: "Alice Johnson",
    date: "2025-02-13",
    category: "Backend",
    content:
      "RESTful APIs are the backbone of modern web applications. They enable communication between the frontend and backend using HTTP methods...",
    tags: ["API", "REST", "Backend", "HTTP"],
  },
  {
    id: 4,
    title: "Mastering Data Structures and Algorithms in JavaScript",
    slug: "mastering-data-structures-algorithms",
    author: "Michael Brown",
    date: "2025-02-13",
    category: "Algorithms",
    content:
      "Data structures and algorithms are essential for efficient problem-solving. Understanding arrays, linked lists, trees, and sorting algorithms can help you excel...",
    tags: ["JavaScript", "Data Structures", "Algorithms", "Problem Solving"],
  },
];

export default function BlogDetails({ params }) {
  const id = params?.id;

  const blog = blogs.find((blog) => blog?.id == id);

  if (!blog) {
    return <h2> Blog Not Found</h2>;
  }

  return (
    <div>
      <h3>Blog Details {id}</h3>

      <h2 className="text-4xl font-bold mb-4">{blog.title}</h2>
      <h2>{blog.content}</h2>
      <h2 className="mt-4">
        <Link href={'/blog'}>
        <button className="bg-blue-400 p-2 text-white">Back To Blog</button>
        
        </Link>
      </h2>
    </div>
  );
}
