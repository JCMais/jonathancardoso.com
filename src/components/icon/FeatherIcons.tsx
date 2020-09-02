import React from 'react'
import * as FeatherOriginalIcons from 'react-feather'
import { Box, BoxProps } from 'rebass'

type FeatherIconsMap = {
  [iconName in keyof typeof FeatherOriginalIcons]: React.FC<
    FeatherOriginalIcons.Props & BoxProps
  >
}

export const FeatherIcons = {} as FeatherIconsMap

for (const [iconName, Icon] of Object.entries(FeatherOriginalIcons)) {
  // @ts-ignore
  FeatherIcons[iconName] = (props) => (
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
