import React from 'react'

import { Box, Flex, Text } from 'rebass'
import { useTheme } from 'emotion-theming'
import Space from '@rebass/space'
import { GitHub, Heart, Linkedin, Twitter } from 'react-feather'

import { Link } from './ui/Link'

import { GatsbyIcon as _GatsbyIcon } from './icon/GatsbyIcon'

const FooterIcon = props => {
  const { icon: Icon, to, ...otherProps } = props
  const theme = useTheme()

  const icon = <Icon color={theme.colors.gray[1]} size={24} />

  if (!to) return icon

  return (
    <Link to={to} {...otherProps}>
      {icon}
    </Link>
  )
}

const GatsbyIcon = () => {
  const theme = useTheme()
  const color = theme.colors.gray[1]

  return <_GatsbyIcon textColor={color} logoColor={color} />
}

export const Footer: React.FunctionComponent = () => (
  <Flex
    backgroundColor="backgroundDarker"
    px={18}
    py={20}
    justifyContent="space-between"
    as="footer"
    sx={{
      boxShadow: 'rgba(0,0,0,0.25) 0px -20px 42px',
    }}
  >
    <Box>
      <Space px={2}>
        <FooterIcon icon={GitHub} to="https://github.com/JCMais" />
        <FooterIcon icon={Linkedin} to="https://linkedin.com/in/jonathancardoso" />
        <FooterIcon icon={Twitter} to="https://twitter.com/_jonathancardos" />
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
        Made with <FooterIcon icon={Heart} /> using <GatsbyIcon size={24} />
      </Flex>
    </Text>
  </Flex>
)
