import React from "react";
import {buildUrl, OptimizedImageProps, srcSetToString} from "./types";
import {LazyLoadImage} from "./lazyImg";
function ThumborOptimizedImage(props: OptimizedImageProps) {
    const fallbackimage = props.fallback.thumbor ? buildUrl(props.fallback.src, props.fallback.thumbor).toString() : props.fallback.src;
    return <LazyLoadImage
        src={props.thumbor ? buildUrl(props.src, props.thumbor).toString() : props.src}
        fallback={fallbackimage}
        placeholder={<img
            alt={props.alt ? props.alt : ''}
            src={props.lowres.thumbor ? buildUrl(props.lowres.src, props.lowres.thumbor).toString() : props.lowres.src}
            width={props.width ? props.width : ''}
            height={props.height ? props.height : ''}
            loading={props.loading ? props.loading : 'lazy'}
            decoding={props.decoding ? props.decoding : 'async'}
            srcSet={props.srcset ? srcSetToString(props.srcset) : ''}
            className={props.class ? props.class : ''}
        />}
        alt={props.alt ? props.alt : ''}
        width={props.width ? props.width : ''}
        height={props.height ? props.height : ''}
        loading={props.loading ? props.loading : 'lazy'}
        decoding={props.decoding ? props.decoding : 'async'}
        srcSet={props.srcset ? srcSetToString(props.srcset) : ''}
        className={props.class ? props.class : ''} />
}

export { ThumborOptimizedImage };
