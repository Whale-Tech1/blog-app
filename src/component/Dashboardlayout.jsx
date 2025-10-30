import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "../page/Dashboard.jsx";


export default function DashboardLayout({ setPage, blogs, page }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar setPage={setPage} />
      {/* <data value=""></data> */}
      <div className=""></div>
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          {page === 'dashboard' ? <Dashboard blogs={blogs} /> : null}
        </main>
      </div>
    </div>
  );
}
