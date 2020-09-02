import React from 'react'

import { Box, Flex, Text } from 'rebass'
import Space from '@rebass/space'
import { useTheme } from 'emotion-theming'
import { GitHub, Heart, Linkedin, Twitter } from 'react-feather'
import { useTranslation, Trans } from 'react-i18next'

import { Theme } from '@r/theme'

import { Link, LinkProps } from './ui/Link'
import { GatsbyIcon as _GatsbyIcon } from './icon/GatsbyIcon'

type FooterIconProps = {
  icon: React.ElementType
} & Partial<LinkProps>

const FooterIcon = (props: FooterIconProps) => {
  const { icon: Icon, to, ...otherProps } = props
  const theme = useTheme<Theme>()

  const icon = (
    <Box width={[22, 24]} sx={{ display: 'inline-block' }}>
      <Icon color={theme.colors.gray[1]} size="100%" />
    </Box>
  )

  if (!to) return icon

  return (
    <Link to={to} {...otherProps}>
      {icon}
    </Link>
  )
}

const GatsbyIcon = () => {
  const theme = useTheme<Theme>()
  const color = theme.colors.gray[1]

  return <_GatsbyIcon textColor={color} logoColor={color} />
}

export const Footer: React.FC = () => {
  const { t } = useTranslation('footer')

  return (
    <Flex
      backgroundColor="backgroundDarker"
      px={18}
      py={20}
      justifyContent="space-between"
      as="footer"
      sx={{
        boxShadow: 'rgba(0,0,0,0.25) 0px -20px 42px',
        zIndex: 2,
      }}
    >
      <Box>
        <Space px={[1, 2]}>
          <FooterIcon icon={GitHub} title="GitHub" to="https://github.com/JCMais" />
          <FooterIcon
            icon={Linkedin}
            title="Linkedin"
            to="https://linkedin.com/in/jonathancardoso"
          />
          <FooterIcon
            icon={Twitter}
            title="Twitter"
            to="https://twitter.com/_jonathancardos"
          />
        </Space>
      </Box>
      <Text variant="footer">
        <Flex
          alignItems="center"
          justifyContent="center"
          sx={{
            whiteSpace: 'pre-wrap',
          }}
        >
          <Trans t={t} i18nKey="Made with love using Gatsby">
            Made with <FooterIcon icon={Heart} /> using <GatsbyIcon />
          </Trans>
        </Flex>
      </Text>
    </Flex>
  )
}
