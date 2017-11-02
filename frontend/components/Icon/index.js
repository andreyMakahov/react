import React from 'react';

const DEFAULT_URI_PREFIX = '#';

export default ({ glyph, width, height, className }) => {
    if (!glyph) return null;

    // bitmap - data-url or link to file
    if (typeof glyph === 'string') {
        return (
            <img src={glyph} width={width} height={height} className={className}/>
        );
    }

    // SVG image
    if (glyph.viewBox) {
        const viewBox = glyph.viewBox.split(' ');
        const vbWidth = viewBox[2];
        const vbHeight = viewBox[3];

        if (width && !height) {
            height = (width / vbWidth) * vbHeight;
        } else if (!width && height) {
            width = (height / vbHeight) * vbWidth;
        } else if (!width && !height) {
            width = vbWidth;
            height = vbHeight;
        }
    }

    if (glyph.id) {
        return (
            <svg width={width} height={height} className={className}>
                <use xlinkHref={`${DEFAULT_URI_PREFIX}${glyph.id}`}/>
            </svg>
        );
    }
    return (
        <object className={className} data={glyph.url} type="image/svg+xml" width={width} height={height}/>
    );
};