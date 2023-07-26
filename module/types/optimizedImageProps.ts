import type {ImageProps} from "./imageProps";
import {FallbackImageProps} from "./fallbackImageProps";

export interface OptimizedImageProps extends FallbackImageProps {
    lowres?: ImageProps;
}
