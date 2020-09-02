---
date: '2017-08-21T18:19:00.000Z'
title: 'Re-utilizing React Native styles with Styled Components'
category: 'Programming'
tags: ['react-native', 'styled-components']
---

<!-- This was originally posted to: https://medium.com/entria/re-utilizing-react-native-styles-with-styled-components-e42a82d42da7 -->

Having to refactor some components to use `styled-components` I felt the urge to reuse some existing styles created to be used with React Native StyleSheet, directly on styled!

Let’s assume that:

1. You are migrating a React Native app to use Styled Components.
1. You have a `Styles` object somewhere on your code base with all your common styles, that looks something like this:

```javascript
// ...

export const Styles = {
  inputSmall: {
    fontSize: 14,
    color: Colors.inputColor,
  },
  // ...
}
```

3. You have a component that uses that `Styles` object:

```javascript
// ...

const Component = () => {
  return (
    <View>
      {/* ...other components */}
      <TextInput style={[Styles.inputSmall, styles.input]} />
    </View>
  )
}

export default Component

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
})
```

In case you don’t know, Styled Components allows for object interpolation directly in the styles declaration, so when migrating that component to use styled, it can be simplified like so:

```javascript
// ...

const Input = styled.TextInput`
  ${Styles.inputSmall};
  font-size: 16;
`

const Component = () => {
  return (
    <View>
      {/* ...other components */}
      <Input />
    </View>
  )
}

export default Component
```

Thanks to [Gabriel Rubens](https://medium.com/u/eb7f5e5dcb67?source=post_page-----e42a82d42da7----------------------) for the tip!
