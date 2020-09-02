import React from 'react'

import { Box, BoxProps } from 'rebass'

export const PostBannerImageWrapper = (props: BoxProps) => {
  return (
    <Box
      sx={{
        width: 'calc(100vw)',
        margin: [
          '0 0 0 calc(-16px)',
          //  - (100vw - 100%) is needed to remove the scrollbar width
          '0 0 0 calc((100vw - 48px) * -0.2 / 2 - 24px - var(--scrollbar-width))',
          '0 0 0 calc((100vw - 48px) * -0.25 / 2 - 24px - var(--scrollbar-width))',
          '0 0 0 calc((100vw - 48px) * -0.4 / 2 - 24px - var(--scrollbar-width))',
        ],
      }}
      {...props}
    />
  )
}
