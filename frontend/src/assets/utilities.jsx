import React from 'react'

export const ImgWithFallback = ({
    src,
    fallback,
    alt,
    type = 'image/webp',
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} alt={alt} {...delegated} />
      </picture>
    );
  };