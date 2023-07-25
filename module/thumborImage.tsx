import React from "react";
import {buildUrl, ImageProps, srcSetToString} from "./types";

function ThumborImage(props: ImageProps) {
    return <img
        src={props.thumbor ? buildUrl(props.src, props.thumbor).toString() : props.src}
        alt={props.alt ? props.alt : ''}
        width={props.width ? props.width : ''}
        height={props.height ? props.height : ''}
        loading={props.loading ? props.loading : 'lazy'}
        decoding={props.decoding ? props.decoding : 'async'}
        srcSet={props.srcset ? srcSetToString(props.srcset) : ''}
        className={props.class ? props.class : ''}
    />;
}

export { ThumborImage };
