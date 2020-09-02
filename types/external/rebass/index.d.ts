import { InterpolationWithTheme } from '@emotion/core'

declare module 'rebass' {
  interface FlexProps {
    // as?: React.ElementType
    css?: BaseProps['css'] & InterpolationWithTheme<any>
  }
  interface BoxProps {
    // as?: React.ElementType
    css?: BaseProps['css'] & InterpolationWithTheme<any>
  }
  interface TextProps {
    // as?: React.ElementType
    css?: BaseProps['css'] & InterpolationWithTheme<any>
  }
}
