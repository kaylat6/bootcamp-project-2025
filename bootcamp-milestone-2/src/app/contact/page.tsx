import React from "react";
import style from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
        <h1 className={style.pageTitle}>Contact</h1>
            <form className={style.contactForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required/>
                <label htmlFor="email">Email</label> 
                <input type="email" id="email" required/>
                <label htmlFor="message">Message</label> 
                <textarea id="message" required></textarea>
                <input type="submit"/>
            </form>
    </main>
  );
}