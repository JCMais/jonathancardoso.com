import styled from '@emotion/styled'
import { Heading as _Heading } from 'rebass'

export const Heading = styled(_Heading)`
  .link-icon::before {
    content: '';
    display: inline-block;
    background-image: url('data:image/svg+xml;utf-8, <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13C10.869 14.1617 12.1996 14.8887 13.6466 14.9923C15.0937 15.0959 16.5144 14.566 17.54 13.54L20.54 10.54C22.4349 8.57807 22.4078 5.45954 20.4791 3.53087C18.5504 1.6022 15.4319 1.57511 13.47 3.46997L11.75 5.17997" stroke="%233d3d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11C13.131 9.8383 11.8003 9.1113 10.3533 9.00766C8.90628 8.90403 7.48559 9.43399 6.45996 10.46L3.45996 13.46C1.5651 15.4219 1.59219 18.5404 3.52086 20.4691C5.44953 22.3978 8.56806 22.4249 10.53 20.53L12.24 18.82" stroke="%233d3d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    width: 18px;
    height: 18px;
    background-size: contain;
    padding-right: 4px;
    background-repeat: no-repeat;
    margin-left: -24px;
    visibility: hidden;
  }

  :hover .link-icon::before {
    visibility: visible;
  }

  @media (hover: none) {
    .link-icon::before {
      visibility: visible;
    }
  }
`
