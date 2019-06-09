import React from "react"
import { Link } from "gatsby"

const blogPreview = ({ path, title, mainImage, n }) => {
  return (
    <div
      className={`blog-preview ${
        n === 1 ? "first" : n === 2 ? "second" : "third"
      }`}
    >
      <Link to={path}>
        <img src={mainImage} />
        <p className="title">{title}</p>
      </Link>
    </div>
  )
}

export default blogPreview
