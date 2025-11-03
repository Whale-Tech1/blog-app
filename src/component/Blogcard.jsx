import React from "react";
export default function BlogCard({ id, title, description, img }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
      </div>
    </div>
  );
}
