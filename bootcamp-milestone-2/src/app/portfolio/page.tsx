import React from "react";
import style from "./portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main>
        <h1 className={style.pageTitle}>Portfolio</h1>
            <div className={style.project}>
                <Link href="/">
                    <img src="website.png" alt="A photo of personal website." width={500}/>
                </Link>
                <div className={style.projectDetails}>
                    <p className={style.projectName}>Kayla's Website</p>
                    <p className={style.projectDescription}>This is a personal website I made with Hack4Impact's starter pack.</p>
                    <Link href="/">Learn more here!</Link>
                </div>
            </div>
    </main>
  );
}