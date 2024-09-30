import React from 'react';

const Textarea = ({
  value,
  onChange,
  placeholder = '',
  rows = 5,
  cols = 50,
  maxLength,
  disabled = false,
  readOnly = false,
  style = {},
  className = '',
  label,
  reference,
  error,
}) => {
  return (
    <div className={`textarea-wrapper ${className}`} style={style}>
      {label && <label htmlFor={reference}>{label}</label>}
      <textarea
        id={reference}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600${className}`}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Textarea;
