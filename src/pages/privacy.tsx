import React from 'react'
import Space from '@rebass/space'

import { MainLayout } from '@r/layouts/MainLayout'
import { ContentBox } from '@r/components/ContentBox'
import { MainContentWrapper } from '@r/components/MainContentWrapper'

import { SEO } from '@r/components/SEO'
import { H1 } from '@r/components/ui/H1'
import { Paragraph } from '@r/components/ui/Paragraph'
import { Link } from '@r/components/ui/Link'

const Privacy = () => {
  return (
    <MainLayout>
      <SEO title="Privacy Police" />
      <MainContentWrapper>
        <ContentBox>
          <H1>Privacy Policy</H1>
          <Space my={[1]}>
            <Paragraph>
              If you have any questions about this privacy policy, please send me an
              email: me@jonathancardoso.com
            </Paragraph>
            <Paragraph>
              The only usage of Cookies by this site is from using Google Analytics, for
              details on what is stored and how it&apos;s used, please read Google&apos;s
              own{' '}
              <Link to="https://policies.google.com/technologies/partner-sites">
                policy
              </Link>
            </Paragraph>
            <Paragraph>
              The configuration option to anonymize IPs and demographics is enabled, and
              google analytics will not be used if you have enabled Do-Not-Track on your
              browser.
            </Paragraph>
          </Space>
        </ContentBox>
      </MainContentWrapper>
    </MainLayout>
  )
}

export default Privacy
