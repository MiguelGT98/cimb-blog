import React from "react"
import { Link } from "gatsby"

import MdCalendar from "react-ionicons/lib/MdCalendar"
import MdPerson from "react-ionicons/lib/MdPerson"
import MdPriceTags from "react-ionicons/lib/MdPricetags"


const blogPreview = ({ path, title, mainImage, n, date, author, description, categories}) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  description = description.children[0].text.substring(0,100);

  return (
    <div
      className={`blog-preview ${
        n === 1 ? "first" : n === 2 ? "second" : "third"
      }`}
    >
      <Link to={path}>
        <img src={mainImage} />
        <div className="details">
          <p className="title">{title}</p>
          <div className="info">
            <span className="date"><MdCalendar color="rgb(112, 148, 37)"/>
            {new Date(date).toLocaleDateString("es-MX")}
            </span>
            <span className="author"> <MdPerson color="rgb(112, 148, 37)"/>
              {author}
            </span>
            <ul className="categories"><MdPriceTags color="rgb(112, 148, 37)"/>
              {categories.map(category=>{
                return <span>{category.title}</span>
              })}
            </ul>
          </div>
          <p className="description">{description}...</p>
        </div>
      </Link>
    </div>
  )
}

export default blogPreview
