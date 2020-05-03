import React from 'react'
import { PageProps } from 'gatsby'

import { MainLayout } from '../layouts/MainLayout'
import { Link } from '../components/ui/Link'
import { SEO } from '../components/SEO'
import { ContentBox } from 'components/ContentBox'
import { H1 } from 'components/ui/H1'
import { MainContentWrapper } from 'components/MainContentWrapper'
import { ListItem } from 'components/ui/ListItem'
import { ListUnordered } from 'components/ui/ListUnordered'

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
      <MainContentWrapper>
        <ContentBox>
          <H1>Categories</H1>
          <ListUnordered>
            {categories.map(({ category, categorySlug }) => (
              <ListItem key={categorySlug}>
                <Link to={`/blog/categories/${categorySlug}`} lng>
                  {category}
                </Link>
              </ListItem>
            ))}
          </ListUnordered>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Categories
