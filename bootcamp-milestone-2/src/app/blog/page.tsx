import React from 'react';
import style from './blog.module.css';
import BlogPreview from '../../components/blogPreview';
import blogs from '../blogData';

export default function BlogPage() {
  return (
    <main className={style.container}>
      {blogs.map(blog => (
        <BlogPreview
          key={blog.slug}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
      />
    ))}
    </main>
  );
}

