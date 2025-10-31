import React from 'react';
import Image from 'next/image';
import style from './blogPreview.module.css';

export default function BlogPreview() {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3> Campus cat </h3>
      <div>
        <img src="IMG_7307.jpg" alt="Campus cat" />
			<Image src="IMG_7307.jpg" alt="img" width={500} height={500} ></Image>
        <p>Campus cat visiting our dorm! We gave him some cat treats and now he keeps coming back.</p>
		<p>Posted on 9/16/25</p>
      </div>
	</div>
  );
}