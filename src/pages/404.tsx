import React from 'react'

import { MainLayout } from '../layouts/MainLayout'
import { SEO } from '../components/SEO'

const NotFoundPage = () => {
  const onClick = () => alert('Pressed')
  return (
    <MainLayout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <button type="button" onClick={onClick}>
        PRESS ME
      </button>
      <p>You just hit a route that doesn&#39;t exist... the sadness. - DEFAULT</p>
    </MainLayout>
  )
}

export default NotFoundPage
