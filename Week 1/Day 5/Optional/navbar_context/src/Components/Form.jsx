import React, { useContext } from 'react';
import { NameContext } from './Wrapper';
import './Form.css';

const Form = () => {
  const { setName } = useContext(NameContext);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="form-container">
      <label htmlFor="nameInput" className="form-label">Change Name: </label>
      <input id="nameInput" type="text" className="form-input" onChange={handleInputChange} />
    </div>
  );
};

export default Form;
