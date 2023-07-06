import React, { useState } from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';
import './Wrapper.css';

export const NameContext = React.createContext();

const Wrapper = () => {
  const [name, setName] = useState('');

  return (
    <div className="wrapper-container">
      <NameContext.Provider value={{ name, setName }}>
        <Navbar />
        <FormWrapper />
      </NameContext.Provider>
    </div>
  );
};

export default Wrapper;
