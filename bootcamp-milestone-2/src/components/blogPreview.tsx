import React from 'react';
import type {Blog} from "../blogData";
import Link from "next/link";
import style from './blogPreview.module.css'

export default function BlogPreview({title, date, description, image, imageAlt, slug}: Blog) {
  return (
    <div className={style.blogContainer}>
      <h3> {title} </h3>
      <div>
        <img src={image} alt={imageAlt} />
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}