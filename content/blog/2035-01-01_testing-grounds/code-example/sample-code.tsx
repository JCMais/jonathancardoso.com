import React, { useState } from 'react'

import { Button as RebassButton } from 'rebass'

// hide-start
// Content here will be hidden :)
// hide-end

export const SampleButton = props => {
  const [counter, setCounter] = useState(0)

  const changeCounter = evt => {
    setCounter(counter + 1)
  }

  return (
    <RebassButton onClick={changeCounter}>
      Click Me! I&apos;ve been clicked {counter} times.
    </RebassButton>
  )
}
