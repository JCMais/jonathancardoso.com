import { GatsbyNode, Page } from 'gatsby'

import { locale } from '@shared/config'

export const onPreExtractQueries: GatsbyNode['onPreExtractQueries'] = ({
  actions,
  reporter,
  store,
}) => {
  const { pages: pagesMap } = store.getState()

  const pages = Array.from(pagesMap.values()) as Page[]

  // if there is no pages/404.tsx create one default catch all for
  //  all not found routes that goes to the 404.[default-lang].tsx file.
  //  if it does exists.
  const defaultLocale404Page = pages.find(
    (page) => page.path === `/${locale.defaultLangKey}/404/`,
  )
  const hasRoot404Page = pages.some(
    (page) => page.path === '/404.html' || page.path === '/404/',
  )
  if (!hasRoot404Page) {
    if (defaultLocale404Page) {
      actions.createPage({
        path: defaultLocale404Page.path,
        matchPath: '/*',
        component: defaultLocale404Page.component,
        context: defaultLocale404Page.context,
      })
    } else {
      // eslint-disable-next-line no-console
      reporter.warn(
        'Root 404 page was not found and one for the default locale was not provided',
      )
    }
  }
}
