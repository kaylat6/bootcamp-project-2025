import React from 'react';
import type {Blog} from "../database/blogSchema";
import Link from "next/link";
import style from './blogPreview.module.css'

export default function BlogPreview({title, date, description, image, imageAlt, slug}: Blog) {
  return (
    <div className={style.blogContainer}>
      <img src={image} alt={imageAlt} className = {style.blogImage}/>
      <div className={style.blogInfo}>
        <h3 className={style.blogTitle}>{title}</h3>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}