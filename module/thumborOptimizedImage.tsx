import React from "react";
import {buildUrl, OptimizedImageProps, srcSetToString} from "./types";

function ThumborOptimizedImage(props: OptimizedImageProps) {
    const fallbackimage = props.fallback.thumbor ? buildUrl(props.fallback.src, props.fallback.thumbor).toString() : props.fallback.src;

    return <img
        src={props.lowres.thumbor ? buildUrl(props.lowres.src, props.lowres.thumbor).toString() : props.lowres.src}
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=fallbackimage;
        }}
        onLoad={(e : any) => {

            const img = new Image();
            img.src = props.thumbor ? buildUrl(props.src, props.thumbor).toString() : props.src;
            // Once image is loaded replace the src of the HTML element
            img.onload = () => {
                e.target.classList.remove('asyncImage');
                return e.target.nodeName === 'IMG' ?
                    e.target.src = img.src :
                    e.target.style.backgroundImage = `url(${img.src})`;
            };
        }}
        alt={props.alt ? props.alt : ''}
        width={props.width ? props.width : ''}
        height={props.height ? props.height : ''}
        loading={props.loading ? props.loading : 'lazy'}
        decoding={props.decoding ? props.decoding : 'async'}
        srcSet={props.srcset ? srcSetToString(props.srcset) : ''}
        className={`asyncImage ${props.class ? props.class : ''}`}
    />;
}

export { ThumborOptimizedImage };
