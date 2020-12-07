import React from "react"
import { Link } from "gatsby"

export default function References({ arr, heading }) {
  if (arr.length === 0) return null

  return (
    <section>
      <h4>{heading}</h4>
      <ul>
        {arr.map(el => {
          return (
            <li key={el.id}>
              <Link to={el.fields.slug}>{el.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
