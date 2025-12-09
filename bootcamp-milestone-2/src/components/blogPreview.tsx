import React from 'react';
import type {Blog} from "../database/blogSchema";
import Link from "next/link";
import style from './blogPreview.module.css'
import { StringExpressionOperatorReturningNumber } from 'mongoose';

export default function BlogPreview({title, date, description, image, image_alt, slug, content, comments}: Blog) {
  return (
    <div className={style.blogContainer}>
      <img src={image} alt={image_alt} className = {style.blogImage}/>
      <div className={style.blogInfo}>
        <h3 className={style.blogTitle}>{title}</h3>
        <p>{description}</p>

        <p>{date.toString()}</p>
      </div>
    </div>
  );
}