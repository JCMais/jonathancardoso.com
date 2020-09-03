import React from 'react'
import {
  Calendar,
  Folder,
  GitHub,
  Instagram,
  Linkedin,
  Tag,
  Twitter,
  Props as FeatherIconProps,
} from 'react-feather'
import { Box, BoxProps } from 'rebass'

// We are not using * as icons on the import above to not import the whole package.
const icons = { Calendar, Tag, Folder, Twitter, GitHub, Linkedin, Instagram } as const

type FeatherIconsMap = {
  [iconName in keyof typeof icons]: React.FC<FeatherIconProps & BoxProps>
}

export const FeatherIcons = {} as FeatherIconsMap

for (const [iconName, Icon] of Object.entries(icons)) {
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
