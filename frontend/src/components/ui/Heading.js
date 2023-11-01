import React from 'react'

export default function Heading({ text, className, subText, subTextStyle }) {
  return (
    <div className='flex flex-row gap-2'>
      <div className={className}>
        {text}
      </div>
      <div className={subTextStyle}>
        {subText}
      </div>
    </div>
  )
}
