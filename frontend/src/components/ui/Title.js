import React from 'react'

export default function Title({ text, isBold, fontFamily, fontSize, classname }) {
    const style = {
        fontFamily: fontFamily || 'inherit',
        fontSize: fontSize || '1rem',
        ...(isBold && { fontWeight: 'bold' }),
    };
    return (
        <div style={style} className={classname}>{text}</div>
    )
}
