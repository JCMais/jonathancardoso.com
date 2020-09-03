import React from 'react'

import { Flex, Text, Box } from 'rebass'
import Space from '@rebass/space'
import { useTranslation } from 'react-i18next'

import { PaginationAwarePageContext } from '@shared/types'
import { trim } from '@shared/utils'

import { Link } from './ui/Link'

type PaginationProps = {
  newerLabel?: string
  olderLabel?: string
  pagination: PaginationAwarePageContext['pagination']
}

export const Pagination = (props: PaginationProps) => {
  const { t } = useTranslation()

  const {
    newerLabel = t('Newer Thoughts'),
    olderLabel = t('Older Thoughts'),
    pagination,
  } = props

  const {
    nextPagePath,
    previousPagePath,
    pageCount,
    currentPageIndex,
    pathPrefix,
  } = pagination

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap">
      <Space py={1}>
        {!!nextPagePath && (
          <Text variant="postBody">
            <Link to={nextPagePath}>
              <Flex flexDirection="row" alignItems="center">
                <Space px={2}>
                  <Box>{'<<'}</Box>
                  <Box>{newerLabel}</Box>
                </Space>
              </Flex>
            </Link>
          </Text>
        )}
        {new Array(pageCount).fill(null).map((_val, pageIndex) => {
          const trimmedPathPrefix = trim(pathPrefix, '/')
          const pageLink =
            pageIndex === 0
              ? `/${trimmedPathPrefix}/`
              : `/${trimmedPathPrefix}/${pageIndex}/`
          const isCurrentPage = currentPageIndex === pageIndex

          const pageElement = isCurrentPage ? (
            <Text>[{pageIndex}]</Text>
          ) : (
            <Link to={pageLink}>{pageIndex}</Link>
          )
          return (
            <Text variant="postBody" key={`page-${pageIndex}`}>
              {pageElement}
            </Text>
          )
        })}
        {!!previousPagePath && (
          <Text variant="postBody">
            <Link to={previousPagePath}>
              <Flex flexDirection="row" alignItems="center">
                <Space px={2}>
                  <Box>{olderLabel}</Box>
                  <Box>{'>>'}</Box>
                </Space>
              </Flex>
            </Link>
          </Text>
        )}
      </Space>
    </Flex>
  )
}
