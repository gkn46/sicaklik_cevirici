import React from 'react'

const Input_ = ({ value, onChange }) => {
    return (
      <input
        type="number"
        className="form-control Hover"
        id="derece"
        placeholder="Celcius"
        value={value}
        onChange={onChange}
      />
    );
  }

export default Input_