import React, { useCallback, useState } from 'react'
import { Box, BoxProps, Button, Flex } from 'rebass'
import { Checkbox, Label, Input } from '@rebass/forms'
import { useTranslation } from 'react-i18next'

import { SlidingTransitionWrapper } from '@r/components/SlidingTransitionWrapper'

type PostNewsletterFormProps = BoxProps

export const PostNewsletterForm = (props: PostNewsletterFormProps) => {
  const { t, i18n } = useTranslation()

  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [shouldShowExtraNewsletterFields, setShouldShowExtraNewsletterFields] = useState(
    false,
  )

  const onNewsletterEmailFocus = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (_evt) => {
      if (!shouldShowExtraNewsletterFields) {
        setShouldShowExtraNewsletterFields(true)
      }
    },
    [setShouldShowExtraNewsletterFields, shouldShowExtraNewsletterFields],
  )
  const onNewsletterEmailBlur = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (_evt) => {
      const shouldShowForm = !!newsletterEmail
      setShouldShowExtraNewsletterFields(shouldShowForm)
    },
    [newsletterEmail, setShouldShowExtraNewsletterFields],
  )

  const onNewsletterEmailChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (evt) => {
      setNewsletterEmail(evt.target.value)
    },
    [setNewsletterEmail],
  )

  return (
    <Box
      as="form"
      action="https://dev.us10.list-manage.com/subscribe/post"
      method="POST"
      {...props}
    >
      <input type="hidden" name="u" value="27e5ddadb6630ceca714dd8fa" />
      <input type="hidden" name="id" value="08b4b87af2" />
      <input type="hidden" name="MERGE2" id="MERGE2" value={i18n.language} />
      <Flex alignItems="center" justifyContent="space-between" flexDirection="row">
        <Label htmlFor="email">
          <span>
            <span role="img" aria-label="emoji acenando com a mão">
              👋{' '}
            </span>
            {t('Liked what you just read? Subscribe to my newsletter')}
            <span role="img" aria-label="emoji abraçando">
              {' '}
              🤗
            </span>
          </span>
        </Label>
        <Input
          id="email"
          name="MERGE0"
          type="email"
          placeholder="you@example.com"
          value={newsletterEmail}
          onFocus={onNewsletterEmailFocus}
          onBlur={onNewsletterEmailBlur}
          onChange={onNewsletterEmailChange}
          width={[0.5]}
        />
      </Flex>
      {/* useChain or useTrail later to have each input coming down */}
      <SlidingTransitionWrapper isVisible={shouldShowExtraNewsletterFields}>
        <Flex flexDirection="column" justifyContent="space-evenly">
          <Box p={[2]}>
            <Label htmlFor="name">{t('Name')}</Label>
            <Input id="name" name="MERGE1" type="text" placeholder={t('Someone')} />
          </Box>
          <Box p={[2]}>
            <Label>{t('Categories')}</Label>
            <Label>
              <Checkbox id="remember" name="group[14185][1]" checked value="1" />
              {t('Programming')}
            </Label>
          </Box>
        </Flex>
        <Button type="submit">{t('Subscribe')}</Button>
      </SlidingTransitionWrapper>
    </Box>
  )
}
