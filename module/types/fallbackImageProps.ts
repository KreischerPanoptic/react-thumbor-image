import type {ImageProps} from "./imageProps";

export interface FallbackImageProps extends ImageProps {
    fallback?: ImageProps;
    id: string;
}
