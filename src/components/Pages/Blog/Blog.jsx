import React from 'react'
import { useRouteData } from 'react-static'

import { Link } from 'components/Router'

function Blog() {
  const { posts } = useRouteData()

  return (
    <>
      <h1>It's blog time.</h1>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/Blog/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </>
  )
}

export default Blog;
