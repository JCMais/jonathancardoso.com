import React, { ComponentType } from 'react'
import * as FeatherOriginalIcons from 'react-feather'
import { Box } from 'rebass'
import styled from '@emotion/styled'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'

interface FeatherIconMap {
  [iconName: keyof typeof FeatherOriginalIcons]: ComponentType<
    FeatherOriginalIcons.Props & SpaceProps & LayoutProps
  >
}

const IconMap: Partial<
  {
    [iconName in keyof typeof FeatherOriginalIcons]: ComponentType<
      FeatherOriginalIcons.Props & SpaceProps
    >
  }
> = {}

for (const [iconName, Icon] of Object.entries(FeatherOriginalIcons)) {
  // @ts-ignore
  IconMap[iconName] = props => (
    <Box
      sx={{
        display: 'inline-block',
      }}
      {...props}
    >
      <Icon width="100%" height="100%" />
    </Box>
  )
  // styled(Icon)`
  //   ${space};
  //   ${layout};
  // `
}

export default IconMap
