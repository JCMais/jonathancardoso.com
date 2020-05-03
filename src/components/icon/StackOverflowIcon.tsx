import React, { FunctionComponent } from 'react'
import { Box, BoxProps } from 'rebass'

export const StackOverflowIcon: FunctionComponent<BoxProps> = ({
  children: _children,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
      }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 73 88"
      >
        <path
          id="svg_1"
          d="m61.73772,80.46372l0,-23.2l7.7,0l0,30.9l-69.5,0l0,-30.9l7.7,0l0,23.2l54.1,0z"
          fill="#bcbbbb"
        />
        <path
          id="svg_2"
          d="m16.13772,55.06372l37.8,7.9l1.6,-7.6l-37.8,-7.9l-1.6,7.6zm5,-18l35,16.3l3.2,-7l-35,-16.4l-3.2,7.1zm9.7,-17.2l29.7,24.7l4.9,-5.9l-29.7,-24.7l-4.9,5.9zm19.2,-18.3l-6.2,4.6l23,31l6.2,-4.6l-23,-31zm-34.7,71.1l38.6,0l0,-7.7l-38.6,0l0,7.7z"
          fill="currentColor"
        />
      </svg>
    </Box>
  )
}
