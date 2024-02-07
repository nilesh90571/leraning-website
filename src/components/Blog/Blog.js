import React, { useEffect } from "react";
import Back from "../Home/back";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  useEffect(() => {
    document.body.classList.add("blog-page");
    return () => {
      document.body.classList.remove("blog-page");
    };
  }, []);
  return (
    <>
      <Back title="Blog Posts" />
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
