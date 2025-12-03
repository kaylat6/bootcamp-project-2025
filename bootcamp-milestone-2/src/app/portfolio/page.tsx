import React from 'react';
import style from './portfolio.module.css';
import ProjectPreview from '../../components/projectPreview';
import Project from '../../database/projectSchema';
import connectDB from '../../database/db';
import Link from "next/link";

async function getProjects(){
  await connectDB()

  try {
      const projects = await Project.find().sort({ date: -1 }).orFail()
      return projects
  } catch (err) {
      return null
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  if (!projects) {
    return <div>Error.</div>
  } 

  return (
    <main className={style.container}>
      {projects.map(project => (
        <ProjectPreview
          title = {project.title}
          description = {project.description}
          link = {project.link}
          image = {project.image}
          image_alt = {project.image_alt}
      />
    ))}
    </main>
  );
}