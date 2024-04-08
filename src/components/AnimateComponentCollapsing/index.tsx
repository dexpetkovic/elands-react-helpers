import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

export const AnimateComponentCollapsing = (props: {
  isComponentCollapsed: boolean
  expandComponentToHeight: number
  children: React.ReactNode
  animationDurationInMs?: number
}): React.ReactElement => {
  const {
    isComponentCollapsed,
    expandComponentToHeight,
    children,
    animationDurationInMs = 300,
  } = props

  const componentCollapseValueMapper = isComponentCollapsed ? 0 : 1

  const heightAnimation = useRef(new Animated.Value(componentCollapseValueMapper)).current

  const navBarTranslateY = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, expandComponentToHeight],
  })

  useEffect(() => {
    Animated.timing(heightAnimation, {
      toValue: componentCollapseValueMapper,
      duration: animationDurationInMs,
      useNativeDriver: false,
    }).start()
  }, [isComponentCollapsed, heightAnimation, animationDurationInMs])

  return <Animated.View style={{ height: navBarTranslateY }}>{children}</Animated.View>
}

export default AnimateComponentCollapsing
