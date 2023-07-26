import React, {useRef, useState} from "react";
import {buildUrl, OptimizedImageProps, srcSetToString} from "./types";
import {useIntersection} from "./lazy/intersectionObserver";
var classnames = require('classnames');
function ThumborOptimizedImage(props: OptimizedImageProps) {
    const fallbackimage = props.fallback.thumbor ? buildUrl(props.fallback.src, props.fallback.thumbor).toString() : props.fallback.src;
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();
    useIntersection(imgRef, () => {
        setIsInView(true);
    });
    const handleOnLoad = () => {
        setIsLoaded(true);
    };
    return (
        <div
            className="react-thumbor-image-container"
            //@ts-ignore
            ref={imgRef}
            style={{
                paddingBottom: `${(props.container.height / props.container.width) * 100}%`,
                width: '100%'
            }}
        >
            {isInView && (
                <>
                    <img
                        className={classnames('react-thumbor-image', 'thumb', props.lowres.class ? props.lowres.class : '', {
                            ['isLoaded']: !!isLoaded
                        })}
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
                        className={classnames('react-thumbor-image', props.class ? props.class : '', {
                            ['isLoaded']: !!isLoaded
                        })}
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
            )}
        </div>
    );
}

export { ThumborOptimizedImage };
