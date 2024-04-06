# Elands Studio - React Helpers

`elands-react-helpers` is a library of helper components for React Native applications. The library aims to provide a set of reusable and customizable components that can be used across different React Native projects.

## Installation

Before using the `elands-react-helpers` library, make sure you have installed and set up React Native in your project. If you haven't, follow the [React Native Getting Started Guide](https://reactnative.dev/docs/getting-started).

To install `elands-react-helpers`, run the following command in your terminal:

```bash
npm install elands-react-helpers
```

## CircularProgress Component

The `CircularProgress` component is a customizable circular progress bar. It uses SVG to draw two circles: one for the background and one for the progress indicator.

### Usage

Here is a basic example of how to use the `CircularProgress` component:

```jsx
import { CircularProgress } from 'elands-react-helpers';

<CircularProgress
  progress={0.7}
  circleColor="blue"
  size={24}
  strokeWidth={6}
/>
```

In this example, the `CircularProgress` component is used to track how many pages a user has turned:

```jsx
import { CircularProgress } from 'elands-react-helpers';
import { useState } from 'react';

const [progress, setProgress] = useState(0);

const handlePageSelected = (index: number): void => {
  if (!spotlightItems.length) return;
  setProgress((index + 1) / spotlightItems.length);
};

<CircularProgress size={24} progress={progress} strokeWidth={6} style={styles.circularProgress} />
```

### Props

The `CircularProgress` component accepts the following props:

- `progress`: A number between 0 and 1 representing the progress. For example, `0.5` represents 50% progress. This prop is required.

- `circleColor`: A string representing the color of the progress circle. This prop is required.

- `size`: A number representing the size of the progress circle in pixels. The default value is `24`.

- `strokeWidth`: A number representing the width of the progress circle stroke in pixels. The default value is `6`.

- `style`: A style object or array that will be passed to the outermost `View` component. This can be used to apply additional styles or layout properties to the progress circle.

## AnimateComponentCollapsing Component

The `AnimateComponentCollapsing` component is used to animate the collapsing of a component. It uses the `Animated` API from `react-native` to create a smooth transition effect.

### Usage

Here is a basic example of how to use the `AnimateComponentCollapsing` component:

```jsx
import { AnimateComponentCollapsing } from 'elands-react-helpers';

<AnimateComponentCollapsing
  isComponentCollapsed={isCollapsed}
  expandComponentToHeight={200}
  animationDurationInMs={500}
>
  <YourComponent />
</AnimateComponentCollapsing>
```

In this example, `YourComponent` will animate the collapsing and expanding based on the `isCollapsed` state.

### Props

The `AnimateComponentCollapsing` component accepts the following props:

- `isComponentCollapsed`: A boolean indicating whether the component is collapsed or not. This prop is required.

- `expandComponentToHeight`: The height to which the component should expand when it is not collapsed. This prop is required.

- `children`: The children components to be rendered inside this component. This prop is required.

- `animationDurationInMs`: The duration of the animation in milliseconds. Defaults to 300ms.


Please replace "YourComponent" with the actual component you want to animate and adjust the usage example as necessary.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the terms of the MIT license.
