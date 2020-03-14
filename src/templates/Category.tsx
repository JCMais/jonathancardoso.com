import React from 'react'
import { PageProps } from 'gatsby'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'

interface CategoryInfo {
  category: string
  categorySlug: string
}

const Category: React.FunctionComponent<PageProps<
  {},
  {
    posts: { [key: string]: any }[]
    activeCategory: CategoryInfo
  }
>> = ({ pageContext }) => {
  const { activeCategory, posts } = pageContext
  return (
    <MainLayout>
      <SEO title={`Blog Category ${activeCategory.category}`} />
      <div>
        <h1>
          {posts.length} post
          {posts.length === 1 ? '' : 's'} on category
          {activeCategory.category}
        </h1>

        <ul>
          {posts.map(({ id, fields, excerpt }) => (
            <li key={id}>
              <h1>
                <Link to={fields.slug}>{fields.title}</Link>
              </h1>
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>

        <hr />

        <Link to="/blog/categories">All Categories</Link>
      </div>
    </MainLayout>
  )
}

export default Category
