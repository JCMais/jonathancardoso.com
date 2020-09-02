import { styled } from '@r/styled'

export const ContentFlowSeparator = styled.hr`
  /* could have been this way: */
  /* background-image: linear-gradient(to right,#B5B5B5 50%,rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 26px 4px;
  background-repeat: repeat-x; */
  /* but we are using svg: */
  background-image: url('data:image/svg+xml;utf-8, <svg width="13" height="4" viewBox="0 0 13 4" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="13" height="4" rx="2" fill="%23B5B5B5"/></svg>');
  background-size: 26px 4px;
  background-repeat: repeat-x;
  border-style: none;
  height: 4px;
  margin: ${(p) => p.theme.space[6]}px 0;
`
