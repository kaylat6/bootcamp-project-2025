import React from 'react';
import style from './blog.module.css';
import BlogPreview from '../../components/blogPreview';
import blogs from '../blogData';
import Blog from '../../database/blogSchema';
import connectDB from '../../database/db';

async function getBlogs(){
	await connectDB()

	try {
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return <div>Error.</div>
  } 

  return (
    <main className={style.container}>
      {blogs.map(blog => (
        <BlogPreview
          key={blog.slug}
          title={blog.title}
          date={String(blog.date)}
          description={blog.description}
          image={blog.image}
          image_alt={blog.image_alt}
          slug={blog.slug}
      />
    ))}
    </main>
  );
}

