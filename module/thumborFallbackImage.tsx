import React from "react";
import {buildUrl, FallbackImageProps, srcSetToString} from "./types";

function ThumborFallbackImage(props: FallbackImageProps) {
    const fallbackimage = props.fallback.thumbor ? buildUrl(props.fallback.src, props.fallback.thumbor).toString() : props.fallback.src;

    return <img
        src={props.thumbor ? buildUrl(props.src, props.thumbor).toString() : props.src}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=fallbackimage;
        }}
        alt={props.alt ? props.alt : ''}
        width={props.width ? props.width : ''}
        height={props.height ? props.height : ''}
        loading={props.loading ? props.loading : 'lazy'}
        decoding={props.decoding ? props.decoding : 'async'}
        srcSet={props.srcset ? srcSetToString(props.srcset) : ''}
        className={props.class ? props.class : ''}
    />;
}

export { ThumborFallbackImage };
