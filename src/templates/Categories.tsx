import React from 'react'
import { PageProps } from 'gatsby'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'

interface CategoryInfo {
  category: string
  categorySlug: string
}

const Categories: React.FunctionComponent<PageProps<
  {},
  {
    categories: CategoryInfo[]
  }
>> = ({ pageContext: { categories } }) => {
  return (
    <MainLayout>
      <SEO title="Blog Categories" />
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
    </MainLayout>
  )
}

export default Categories
