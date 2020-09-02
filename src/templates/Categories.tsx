import React from 'react'
import { PageProps } from 'gatsby'

import { useTranslation } from 'react-i18next'

import { MainLayout } from '@r/layouts/MainLayout'

import { ContentBox } from '@r/components/ContentBox'
import { MainContentWrapper } from '@r/components/MainContentWrapper'
import { SEO } from '@r/components/SEO'

import { H1 } from '@r/components/ui/H1'
import { Link } from '@r/components/ui/Link'
import { ListItem } from '@r/components/ui/ListItem'
import { ListUnordered } from '@r/components/ui/ListUnordered'

interface CategoryInfo {
  category: string
  categorySlug: string
}

const Categories: React.FC<PageProps<
  {},
  {
    categories: CategoryInfo[]
  }
>> = ({ pageContext: { categories } }) => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <SEO title={t('Categories')} />
      <MainContentWrapper>
        <ContentBox>
          <H1>{t('Categories')}</H1>
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
