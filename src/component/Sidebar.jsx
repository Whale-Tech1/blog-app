// src/components/Sidebar.jsx
export default function Sidebar({ setPage }) {
  const menu = [
    "Dashboard",
    "Add",
  ];
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="text-x2 font-bold mb-6">My Blog</h2>
      <nav className="space-y-2">
        {menu.map((item) => (
          <a
            key={item}
            href="#"
            className="block px-3 py-2 rounded hover:bg-blue-100 text-gray-700"
            onClick={() => setPage(item.toLowerCase())}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
