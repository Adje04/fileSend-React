import React, { useState } from 'react'

export default function Input(
    { label,
        type,
        reference,
        value,
        onChange,
        placeholder,
        className,
        onClick,
        style,
        icon,
        iconStyle,
        showIconOnly = false, }
) {
    const [showInput, setShowInput] = useState(!showIconOnly);

    const handleIconClick = () => {
        if (showIconOnly) {
            setShowInput(true); // Affiche la barre de recherche lorsqu'on clique sur l'icône
        }
        if (onClick) {
            setShowInput(false);
        }
    };

    return (
        <div className='mb-4'>
            {/* Affiche uniquement l'icône si showIconOnly est true */}
            {showIconOnly && !showInput ? (
                <span onClick={handleIconClick} style={{ cursor: 'pointer', ...iconStyle }}>
                    {icon}
                </span>
            ) : (
                <>
                    {/* Icône cliquable */}
                    <span onClick={handleIconClick} style={{ cursor: 'pointer', ...iconStyle }}>
                        {icon}
                    </span>

                    <label htmlFor={reference} className="block text-gray-700 dark:text-gray-300 mb-2">
                        {label}
                    </label>
                    <input
                        type={type}
                        id={reference}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        style={{ style }}
                        required
                        className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600${className}`}
                    />
                </>
            )}

        </div>
    );
}












