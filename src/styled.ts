import defaultStyled, { CreateStyled } from '@emotion/styled'
import { theme } from './theme'

export const styled = defaultStyled as CreateStyled<typeof theme>
