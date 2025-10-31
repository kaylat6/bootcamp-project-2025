import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.header}>
      <h1 className={style.logo}><Link href="/">Kayla Tran</Link></h1>
      <nav>
        <ul className={style.navList}>
        {/* We'll use Link from now on instead of <a></a>
			      Links are just Next.js wrapper arounds <a> elements anyways
         */}
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blogs">Blog</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/about">Contact</Link></li>
				{/* More Links ... */}
        </ul>
      </nav>
    </header>
  );
}