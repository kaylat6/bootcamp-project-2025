import React from "react";
import style from "./resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <main>
      <h1 className={style.pageTitle}>Resume</h1>
            <Link href="Kayla Tran's Resume.pdf" download>Download Resume</Link>
            <div className={style.resume}>

            </div>
            <section className={style.section}>
                <h1 className={style.sectionTitle}>Education</h1>
                <div className={style.entry}>
                    <h3 className={style.entryTitle}>Bachelor of Science in Computer Science | Expected Graduation May 2029</h3>
                    <p className={style.entryInfo}></p>
                </div>
            </section>
            <section className={style.section}>
                <h1 className={style.sectionTitle}>Experience</h1>
                    <div className={style.entry}>
                        <h3 className={style.entryTitle}>Coder School Coach Intern</h3>
                        <p className={style.entryInfo}>Coder School | July 2024 - May 2025</p>
                        <p className={style.entryDescription}>- Instruct kids ages 8-12 in one-on-one hourly sessions on Python and Scratch</p>
                        <p className={style.entryDescription}>- Plan lessons that best fit each student's level to keep them engaged and learning</p>
                        <h3 className={style.entryTitle}>Kode with Klossy Scholar</h3>
                        <p className={style.entryInfo}>Kode with Klossy | July 24th, 2023 - August 4th, 2023</p>
                        <p className={style.entryDescription}>- Attended an in-person web development camp to build a website with a team over the course of two weeks</p>
                        <p className={style.entryDescription}>- Recevied instrction on JavaScript, HTML, and CSS to prgram a website that recommends music from small artists based on user input</p>
                    </div>
            </section>
            <section className={style.section}>
                <h1 className={style.sectionTitle}>Activities</h1>
                    <div className={style.entry}>
                        <h3 className={style.entryTitle}>Mini Cat Town Volunteer</h3>
                        <p className={style.entryInfo}>Mini Cat Town | June 2023 - July 2024</p>
                        <p className={style.entryDescription}>- Greeted customers and processed daily transactions</p>
                        <p className={style.entryDescription}>- Socialized with cats and maintained the adoption area</p>
                        <h3 className={style.entryTitle}>National Volunteer and Leadership Program</h3>
                        <p className={style.entryInfo}>California High School | September 2021 - June 2025</p>
                        <p className={style.entryDescription}>- As president, helped increase club membership from 113 in 2021 to 310 in 2024</p>
                        <p className={style.entryDescription}>- As activity coordinator, hosted 50+ events to bring a variety of events accesible to all club members</p>
                    </div>
            </section>
            <section className={style.section}>
                <h1 className={style.sectionTitle}>Coursework</h1>
                    <div className={style.entry}>
                        <h3 className={style.entryTitle}></h3>
                        <ul className={style.courseList}>
                            <li>Fundamentals of Computer Science</li>
                            <li>AP Computer Science Principles</li>
                        </ul>
                    </div>
            </section>
            <section className={style.section}>
                <h1 className={style.sectionTitle}>Awards</h1>
                    <div className={style.entry}>
                        <h3 className={style.entryTitle}></h3>
                        <ul className={style.awardsList}>
                            <li>Bronze PVSA 2024, Gold PVSA 2023, Gold PVSA 2022</li>
                            <li>French 1 Grand Concours Bronze Medalist 2022</li>
                        </ul>
                    </div>
            </section>  
    </main>
  );
}