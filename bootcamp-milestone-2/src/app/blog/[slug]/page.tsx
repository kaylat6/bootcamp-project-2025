import React from 'react';
import BlogPreview from '../../../components/blogPreview';
import Blog from '../../../database/blogSchema';
import connectDB from '../../../database/db';
import style from '../blogPage.module.css';
import Comment from '../../../components/comment';
import {IComment} from '../../../database/blogSchema';

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string){
	await connectDB()

	try {
	    const blog = await Blog.findOne({slug: slug})
        //.sort({ date: -1 }).orFail();
        console.log("=== Comments count:", blog.comments?.length);
	    return blog
	} catch (err) {
	    return null
	}
}

export default async function BlogPage({params}: Props) {
    const {slug} = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        return <div>Error.</div>
    }
    
    return (
        <main className={style.blogPContainer}>
            <h1>{blog.title}</h1>
            <img src={blog.image} className = {style.blogPImage}/>
            <p>{blog.content}</p>
            <h2>Comments</h2>
        {console.log("Comments array", blog.comments)}
            {blog.comments.map((comment: IComment, index: number) => (
	        <Comment key={index} comment={comment} />
            ))}
        </main>
    );
}
