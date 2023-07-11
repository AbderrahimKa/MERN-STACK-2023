import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function App() {
  const [selectedOption, setSelectedOption] = useState("peoples");
  const [selectedId, setSelectedId] = useState('');
  const [error, setError] = useState(null);
  const { resource, id } = useParams();
  const [resourceData, setResourceData] = useState(null);


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedId.trim() === '') {
      setError('Please enter an ID');
      return;
    }
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(setSelectedOption);
        const apiUrl = `https://swapi.dev/api/${resource}/${id}`;
        const response = await axios.get(apiUrl);
        const data = response.data;
        setResourceData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [resource, id]);

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="planets">Planets</option>
          <option selected value="people">People</option>
          <option value="starships">Starships</option>
        </select>
        <input
          type="text"
          value={selectedId}
          onChange={handleIdChange}
          placeholder="Enter ID"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}

      {resourceData ? (
        <div>
          <h3>{resourceData.name}</h3>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;