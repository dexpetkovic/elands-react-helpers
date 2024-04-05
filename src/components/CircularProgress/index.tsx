import React, { useCallback } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import Svg, { Circle } from 'react-native-svg'


export const CircularProgress = (props: {
  progress: number
  circleColor: string
  size?: number
  strokeWidth?: number
  style?: StyleProp<ViewStyle>
}): React.ReactElement => {
  const {progress = 0, circleColor, size = 24, strokeWidth = 6, style = {},  } = props
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const getStrokeDashOffset = useCallback(() => {
    return circumference * (1 - progress)
  }, [progress])

  return (
    <View style={[style, { width: size, height: size }]}>
      <Svg>
        <Circle
          stroke={circleColor}
          strokeWidth={strokeWidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill={'none'}
          strokeDasharray={circumference}
        />
        <Circle
          stroke={circleColor}
          strokeWidth={strokeWidth}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill={'none'}
          strokeDasharray={circumference}
          strokeDashoffset={getStrokeDashOffset()}
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        />
      </Svg>
    </View>
  )
}

export default CircularProgress;
