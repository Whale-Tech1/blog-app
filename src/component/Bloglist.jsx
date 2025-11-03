import BlogCard from "./Blogcard.jsx ";

export default function BlogList({ posts }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
