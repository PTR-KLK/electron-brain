import React from "react"
import { Link } from "gatsby"

// https://stackoverflow.com/a/38979205 - Update 3

const isUrlAbsolute = url =>
  url.indexOf("//") === 0
    ? true
    : url.indexOf("://") === -1
    ? false
    : url.indexOf(".") === -1
    ? false
    : url.indexOf("/") === -1
    ? false
    : url.indexOf(":") > url.indexOf("/")
    ? false
    : url.indexOf("://") < url.indexOf(".")
    ? true
    : false

const catchLinks = {
  a: a =>
    !isUrlAbsolute(a.href) ? (
      <Link to={a.href}>{a.children}</Link>
    ) : (
      <a href={a.href} target="_blank" rel="noreferrer noopener">
        {a.children}
      </a>
    ),
}

export default catchLinks
