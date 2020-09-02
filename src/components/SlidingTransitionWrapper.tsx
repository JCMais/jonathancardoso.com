import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { animated, useTransition } from 'react-spring'

// The code/idea of this component was mostly copied from this awesome post:
// https://medium.com/clever-franke/create-a-react-slidetoggle-component-with-hooks-and-react-spring-748919c38667

const Inner = styled.div`
  &:before,
  &:after {
    content: '';
    display: table;
  }
`

const visibleStyle = { height: 'auto', opacity: 1, overflow: 'visible' }
const hiddenStyle = { height: 0, opactiy: 0, overflow: 'hidden' }

const getElementHeight = (ref: React.MutableRefObject<HTMLElement>) => {
  return ref.current ? ref.current.getBoundingClientRect().height : 0
}

type SlidingTransitionWrapperProps = {
  isVisible: boolean
  children: React.ReactNode
}

type TransitionNextFn = (val: any) => Promise<void>
type TransitionCancelFn = () => void

export const SlidingTransitionWrapper: React.FC<SlidingTransitionWrapperProps> = ({
  isVisible,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const isVisibleOnMount = useRef(isVisible)

  // @ts-ignore Also could not find good types to use on enter / leave below
  const transitions = useTransition(isVisible, null, {
    enter: () => async (next: TransitionNextFn, cancel: TransitionCancelFn) => {
      // @ts-expect-error Argument of type 'RefObject<HTMLElement>' is not assignable to parameter of type 'MutableRefObject<HTMLElement>'
      const height = getElementHeight(innerRef)

      cancel()

      await next({ height, opacity: 1, overflow: 'hidden' })
      await next(visibleStyle)
    },
    leave: () => async (next: TransitionNextFn, cancel: TransitionCancelFn) => {
      // @ts-expect-error Argument of type 'RefObject<HTMLElement>' is not assignable to parameter of type 'MutableRefObject<HTMLElement>'
      const height = getElementHeight(containerRef)

      cancel()

      await next({ height, overflow: 'hidden' })
      await next(hiddenStyle)

      isVisibleOnMount.current = false
    },
    from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
    // make sure react spring does not mount multiple children
    unique: true,
  })

  return (transitions.map(({ item: shouldShowItem, props: springProps, key }) => {
    if (shouldShowItem) {
      return (
        <animated.div ref={containerRef} key={key} style={springProps}>
          <Inner ref={innerRef}>{children}</Inner>
        </animated.div>
      )
    }

    return null
  }) as unknown) as React.ReactElement
}
