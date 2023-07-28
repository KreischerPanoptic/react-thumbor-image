import React, {useRef, useState} from "react";
import {buildUrl, OptimizedImageProps, srcSetToString} from "./types";

function ThumborOptimizedImage(props: OptimizedImageProps) {
    const fallbackimage = props.fallback.thumbor ? buildUrl(props.fallback.src, props.fallback.thumbor).toString() : props.fallback.src;
    const [isLoaded, setIsLoaded] = useState(false);
    const handleOnLoad = () => {
        setIsLoaded(true);
    };
    return (
        <>
            <img
                className={`react-thumbor-image thumb ${props.lowres.class ? props.lowres.class : ''} ${!!isLoaded ? 'isLoaded' : ''}`}
                src={props.lowres.thumbor ? buildUrl(props.lowres.src, props.lowres.thumbor).toString() : props.lowres.src}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src=fallbackimage;
                }}
                alt={props.lowres.alt ? props.lowres.alt : ''}
                width={props.lowres.width ? props.lowres.width : ''}
                height={props.lowres.height ? props.lowres.height : ''}
                loading={props.lowres.loading ? props.lowres.loading : 'lazy'}
                decoding={props.lowres.decoding ? props.lowres.decoding : 'async'}
                srcSet={props.lowres.srcset ? srcSetToString(props.lowres.srcset) : ''}
            />
            <img
                className={`react-thumbor-image ${props.class ? props.class : ''} ${!!isLoaded ? 'isLoaded' : ''}`}
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
                onLoad={handleOnLoad}
            />
        </>
    );
}

export { ThumborOptimizedImage };
