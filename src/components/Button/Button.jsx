import React from 'react'

export default function Button(
    {
        type,
        text,
        style,
        className,
        disabled,
        iconStyle,
        icon = null,
        onClick
    }
) {
    const defaultIconStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        color: '#094EFF'
    }
    return (
        <div>
            <button className={`w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
            type={type || "button"} style={style} onClick={onClick} disabled={disabled}>
                {/* span est rendu ssi icon est defini(non null)  */}
                {icon && <span style={{ ...defaultIconStyle, ...iconStyle }}>{icon}</span>}{text}

            </button>
        </div>
    )
}




