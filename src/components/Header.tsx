import React from 'react'

import { Box, Flex, Text } from 'rebass'
import Space from '@rebass/space'

import { Link } from './ui/Link'

export const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle: _siteTitle,
}) => (
  <Flex
    backgroundColor="backgroundDarker"
    px={18}
    py={20}
    justifyContent="space-between"
    as="header"
    sx={{
      boxShadow: 'rgba(0,0,0,0.25) 3px 2px 42px',
    }}
  >
    <Text
      fontFamily="heading"
      fontSize={4}
      fontWeight="bold"
      sx={{ textTransform: 'uppercase' }}
    >
      Jonathan Cardoso Machado
    </Text>
    <Box>
      <Space mx={2}>
        <Link to="/en/" variant="linkHeader">
          HOME
        </Link>
        <Link to="/en/blog" variant="linkHeader">
          BLOG
        </Link>
      </Space>
    </Box>
  </Flex>
)
