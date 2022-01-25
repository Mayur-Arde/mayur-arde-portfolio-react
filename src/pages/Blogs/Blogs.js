import React from 'react'
import blogData from './blogData';
import './blog.css';

function Blogs() {
  return (
    <section className='blogs'>
      <h2>Blogs</h2>
      <article className='blogs-list'>
      {blogData.map(blog => ( 
        <div className='blog' key={blog.id}>
          <a href={blog.link} target='_blank' rel='noreferrer'>
          <img src={blog.image} alt={blog.title} className='blog-img' />
          <p>{blog.title}</p>
          <p>{blog.timeToRead}</p>
          </a>
        </div>
      ))}
      </article>

    </section>
  )
}

export default Blogs
