import React from "react";
import "./blogCard.css";

function BlogCard({ blogs }) {
  return (
    <div className="blog col-xl-3 col-md-6 mb-4">
      <article>
        <div className="post-img">
          <img
            src={blogs?.thumbnail || "default-thumbnail.jpg"}
            alt=""
            className="img-fluid"
          />
        </div>
        <p className="post-category">{blogs?.category || "Uncategorized"}</p>
        <h2 className="title">
          <a href="#">{blogs?.title || "Untitled"}</a>
        </h2>
        <div className="d-flex align-items-center">
          <img
            src={blogs?.author?.image || "default-author.jpg"}
            alt=""
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author-list">
              {blogs?.author?.name || "Anonymous"}
            </p>
            <p className="post-date">
              <time dateTime={blogs?.date || "2022-01-01"}>
                {blogs?.date || "January 1, 2022"}
              </time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
