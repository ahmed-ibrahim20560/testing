
const token = "8iCC8lFHkGoHKBTe-CXC6uCxlUlhJcukuvxMWONlaaA";
const search = "cactus"
const apiUrl = `https://trefle.io/api/v1/plants/search?token=${token}&q=${search}`;

import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

