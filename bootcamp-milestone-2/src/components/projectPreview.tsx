import React from "react";
import type { Project } from "../database/projectSchema";
import Link from "next/link";
import style from "./projectPreview.module.css";

export default function ProjectPreview({
  title,
  description,
  link,
  image,
  image_alt,
}: Project) {
  return (
    <div className={style.projectContainer}>
      <h3> {title} </h3>
      <div>
        <img src={image} alt={image_alt} />
        <p>{description}</p>
        <a href={link} className={style.info}>
          Learn more here!
        </a>
      </div>
    </div>
  );
}
