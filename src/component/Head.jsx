import React, { use, useState } from 'react';
import Modal from './modal';
import useBlog from '../store/useblog';


const Header = ({ page, setPage }) => {
  const addBlog = useBlog((state) => state.addBlog);
  const handleAddBlog = (e) => {
    e.preventDefault()
    const newBlog = {
      id: Date.now(),
      title: title,
      description: description,
      img: imageUrl,
    };
    addBlog(newBlog);
    setTitle('');
    setDescription('');
    setImageUrl('');
    setPage('dashboard');
  };
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center border-collapse border border-gray">
      <h1 className="text-3xl font-bold sm:font-normal">Dashboard</h1>

      <button onClick={() => setPage('add')} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-3xl">Create </button>

      <Modal isOpen={page === 'add'} onClose={() => setPage('dashboard')}>
        <form className="text-left space-y-5 w-96" onSubmit={handleAddBlog}>
          <h1 className='text-xl sm:text-2xl font-bold '>Create New Blog</h1>
          <label htmlFor="">Title:</label>
          <input type="text" required className='w-full h-9 font-bold  bg-gray-200 rounded-md p-2 my-2' value={title} onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="">Description:</label>
          <textarea name="" required className='w-full h-24 bg-gray-200 rounded-md p-2 my-2' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <label htmlFor="">Image Url:</label>
          <input type="text" required className='w-full h-9 bg-gray-200 rounded-md p-2 my-2' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          <button className="w-30 h-10 bg-blue-800 text-white mt-4" type='submit'>Add Blog</button>
        </form>

      </Modal>

    </div>
  );
};

export default Header;



