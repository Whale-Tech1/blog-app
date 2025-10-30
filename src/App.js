import React from 'react';
import './App.css';
import Header from './component/Head.jsx';
import Dashboard from './component/Dashboardlayout.jsx';

function App() {
  const [page, setPage] = React.useState('dashboard');
  const [blogs, setBlogs] = React.useState([]);
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };
  return (
    <div className="App">
      <Header setPage={setPage} page={page} addBlog={addBlog} />
      <Dashboard setPage={setPage} blogs={blogs} page={page}/>

    </div>
  );
}
export default App;

