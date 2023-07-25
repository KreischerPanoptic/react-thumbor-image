import React from "react";
import {buildUrl, PictureProps, srcSetToString} from "./types";

function ThumborPicture(props: PictureProps) {
    return <picture className={ props.class ?  props.class : ''}>
        {
             props.sources.map((source) => (
                <source srcSet={srcSetToString(source.srcset)} media={source.media ? source.media : ''}
                        type={source.type ? source.type : ''}/>
            ))
        }
        <img
            src={ props.image.thumbor ? buildUrl( props.image.src,  props.image.thumbor).toString() :  props.image.src}
            alt={ props.image.alt ?  props.image.alt : ''}
            width={ props.image.width ?  props.image.width : ''}
            height={ props.image.height ?  props.image.height : ''}
            loading={ props.image.loading ?  props.image.loading : 'lazy'}
            decoding={ props.image.decoding ?  props.image.decoding : 'async'}
            srcSet={ props.image.srcset ? srcSetToString( props.image.srcset) : ''}
            className={ props.image.class ?  props.image.class : ''}
        />
    </picture>;
}

export { ThumborPicture };
