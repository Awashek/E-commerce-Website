import React from 'react'

export default function Button({handleClick, value, title}) {
    return (
        <button
        onClick={handleClick}
        value={value}
        className='btns'
        >
            {title}
        </button>
        )
}
