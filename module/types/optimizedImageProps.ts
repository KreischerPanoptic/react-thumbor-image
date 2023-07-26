import type {ImageProps} from "./imageProps";
import {FallbackImageProps} from "./fallbackImageProps";

interface OptimizedImageContainerProps {
    width: number;
    height: number;
}

export interface OptimizedImageProps extends FallbackImageProps {
    lowres?: ImageProps;
    container: OptimizedImageContainerProps;
}
