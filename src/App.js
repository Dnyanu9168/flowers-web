import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar';
import FlowerCard from './Components/FlowerCard';
import axios from "axios";

function App() {
  const [flowers, setFlowers] = useState([]);
  const [likedFlowers, setLikedFlowers] = useState([]);
  const [page, setPage] = useState(1);

  const fetchFlowers = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: "flowers", per_page: 12, page: page },
          headers: {
            Authorization: "Client-ID kTq_uCE5E-Kh3Y3mruYIf8fWX86NW3CsUJH_f6Rl60s",
          },
        }
      );

      const flowerData = response.data.results.map((item) => ({
        id: item.id,
        name: item.alt_description || "Flower",
        image: item.urls.small,
        price: Math.floor(Math.random() * 20) + 5,
        // description: "",
      }));

      // Append new flowers instead of replacing
      setFlowers((prev) => [...prev, ...flowerData]);
    } catch (error) {
      console.error("Error fetching flowers:", error);
    }
  };

  useEffect(() => {
    fetchFlowers();
  }, [page]);

  // Handle like/unlike
  const handleLikeFlower = (flower) => {
    if (likedFlowers.some((f) => f.id === flower.id)) {
      setLikedFlowers((prev) => prev.filter((f) => f.id !== flower.id));
    } else {
      setLikedFlowers((prev) => [...prev, flower]);
    }
  };

  return (
    <div>
      <Navbar likedFlowers={likedFlowers} />
      <div style={{ paddingTop: "80px", textAlign: "center" }}>
        <h1>“If you were a flower, you’d be a blooming miracle.”🌸</h1>

        <div className="card-container">
          {flowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
              isLiked={likedFlowers.some((f) => f.id === flower.id)}
              onLike={() => handleLikeFlower(flower)}
            />
          ))}
        </div>

        <button
          className="load-more-btn"
          onClick={() => setPage((prev) => prev + 1)}
         >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
