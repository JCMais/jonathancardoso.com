import React from 'react'
import { PageProps } from 'gatsby'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'

interface CategoryInfo {
  category: string
  categorySlug: string
}

const CategoryItem: React.FunctionComponent<{
  postsByCategory: Object[]
  activeCategory: CategoryInfo
}> = ({ postsByCategory, activeCategory }) =>
  console.log(postsByCategory) || (
    <div>
      <h1>
        {postsByCategory.length} post
        {postsByCategory.length === 1 ? '' : 's'} on category {activeCategory.category}
      </h1>

      <ul>
        {postsByCategory.map(({ id, fields, excerpt }) => {
          return (
            <li key={id}>
              <h1>
                <Link to={fields.slug}>{fields.title}</Link>
              </h1>
              <p>{excerpt}</p>
            </li>
          )
        })}
      </ul>

      <hr />

      <Link to="/blog/categories">All Categories</Link>
    </div>
  )

const CategoryList = ({ categories }) => (
  <div>
    <h1>Categories</h1>
    <ul>
      {categories.map(({ category, categorySlug }) => (
        <li key={categorySlug}>
          <Link to={`/blog/categories/${categorySlug}`}>{category}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const Categories: React.FunctionComponent<PageProps<
  {},
  {
    postsByCategories: Object[]
    postsByCategory: Object[]
    categories: Object[]
    activeCategory: CategoryInfo
  }
>> = ({ pageContext }) => {
  const Children = pageContext.activeCategory ? CategoryItem : CategoryList
  const title = pageContext.activeCategory
    ? `Blog Category ${pageContext.activeCategory.category}`
    : 'Blog Categories'
  return (
    <MainLayout>
      <SEO title={title} />
      <Children {...pageContext} />
    </MainLayout>
  )
}

export default Categories
