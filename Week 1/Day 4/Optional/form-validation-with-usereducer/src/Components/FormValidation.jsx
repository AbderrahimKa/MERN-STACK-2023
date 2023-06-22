import React, { useReducer } from 'react';
import '../App.css'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  errors: {
    firstName: '',
    lastName: '',
    email: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      };
    case 'VALIDATE':
      return {
        ...state,
        errors: {
          firstName: state.firstName.length ? '' : 'First name is required',
          lastName: state.lastName.length ? '' : 'Last name is required',
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)
            ? ''
            : 'Invalid email address',
        },
      };
    default:
      return state;
  }
};

const FormValidation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: 'CHANGE', field, value });
    dispatch({ type: 'VALIDATE' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'VALIDATE' });
    const { errors } = state;
    if (Object.values(errors).every((error) => error === '')) {
      console.log('Form submitted:', state);
    }
  };

  const { firstName, lastName, email, errors } = state;

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default FormValidation;
