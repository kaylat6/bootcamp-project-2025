
import React from "react";
import style from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1 className={style.pageTitle}>Kayla's Website</h1>
            <div className={style.about}>
                <div className={style.aboutImage}>
                    <img src="IMG_7307.jpeg" alt="A photo of me."/>
                </div>
                <div className={style.aboutText}>
                    <p>Hi, my name is Kayla Tran and I'm a first year computer science major at Cal Poly SLO! I'm interested in software and web development. Some of my favorite hobbies include playing video games, watching anime, and calligraphy.</p>
                </div>
            </div>
    </main>
  );
}
