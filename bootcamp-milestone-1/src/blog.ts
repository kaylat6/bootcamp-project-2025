type Blog = {
    title: string;
    date:string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
    title: "Campus cat",
    date: "9/16/25",
    description: "Campus cat visiting our dorm! We gave him some cat treats and now he keeps coming back.",
    image: "IMG_0456.jpg",
    imageAlt: "Campus cat",
    slug: "blog1.html",
    },
    {
    title: "Sequel Tea",
    date: "9/17/25",
    description: "Tried out the new boba place with some friends today! They have a lot of different flavors, but my go to boba order is matcha.",
    image: "IMG_0493.jpg",
    imageAlt: "Boba",
    slug: "blog2.html",
    },
];

const blogContainer = document.getElementById("blog-container");
const blogContainer1 = document.getElementById("blog-container1");
const blogContainer2 = document.getElementById("blog-container2");

blogs.forEach((blog) => {
    const blogdiv = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = blog.title;

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const date = document.createElement("p");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.textContent = blog.description;
    
    const link = document.createElement("a");
    link.href = blog.slug;
    link.textContent = blog.title;
    if (blogContainer) {
        blogdiv.appendChild(image);
        blogdiv.appendChild(link);
        blogContainer.appendChild(blogdiv);
    }

    if (blog.slug === "blog1.html") {
        if (blogContainer1) {
        blogdiv.appendChild(title)
        blogdiv.appendChild(image);
        blogdiv.appendChild(date);
        blogdiv.appendChild(description);
        blogContainer1.appendChild(blogdiv);
    }
    }

    if (blog.slug === "blog2.html") {
        if (blogContainer2) {
            blogdiv.appendChild(title);
            blogdiv.appendChild(image);
            blogdiv.appendChild(date);
            blogdiv.appendChild(description);
            blogContainer2.appendChild(blogdiv);
        }
    }
});