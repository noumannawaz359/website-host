import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../api/axios';

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError("Error fetching data");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data.length === 0 && !error && <p>Loading...</p>}
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}{product.price}{product.image}</li> // Adjust fields based on API response
        ))}
      </ul>
    </div>
  );
}

export default Home;
