import React from 'react'

import { MainLayout } from '../layouts/MainLayout'
import { SEO } from '../components/SEO'

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness. - EN</p>
  </MainLayout>
)

export default NotFoundPage
