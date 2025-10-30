
import React, { useState } from "react";

const Dashboard = ({ blogs }) => {


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Blog Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Blog Posts</h2>
        {blogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  description={blog.description}
                  className="rounded-xl mb-3 w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{blog.description}</p>
                <span className="block text-xs text-gray-400 mt-2">ID: {blog.id}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-6">No blog posts found.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
