import React, { useState } from 'react';

function Inputfield({ type = 'text', placeholder = '', onChange, style = {} }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div  style={{ marginBottom: '10px', ...style }}>
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        style={{
            backgroundColor: '#EFEFEF',
            width: '275px', 
            height: '50px', 
            borderRadius: '30px', 
            paddingLeft: '20px',
            ... style
        }}
      />
    </div>
  );
}

export default Inputfield;
