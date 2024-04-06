import React from "react";

declare module 'elands-react-helpers' {
    import {FC} from 'react';
    import {StyleProp, ViewStyle} from 'react-native';

    export interface CircularProgressProps {
        progress: number;
        circleColor: string;
        size?: number;
        strokeWidth?: number;
        style?: StyleProp<ViewStyle>;
    }

    export interface AnimateComponentCollapsingProps {
        isComponentCollapsed: boolean
        expandComponentToHeight: number
        children: React.ReactNode
        animationDurationInMs?: number
    }

    export const CircularProgress: FC<CircularProgressProps>;
    export const AnimateComponentCollapsing: FC<AnimateComponentCollapsingProps>;
}
