import React, { useState } from 'react';
function Change() {
    const [inputValues, setInputValues] = useState([0, 0, 0, 0]);

    const handleChange = (index) => (event) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = event.target.value;
      setInputValues(newInputValues);
    };
  
    return (
      <div>
        {inputValues.map((inputValue, index) => (
          <div key={index}>
            <input type="text" value={inputValue} onChange={handleChange(index)} />
            <div>{inputValue * 2}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Change;