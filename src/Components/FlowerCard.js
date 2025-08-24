import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import "./FlowerCard.css";

function FlowerCard({ flower, isLiked, onLike }) {
  if (!flower) return null; // Prevent undefined errors

  const handleAddToCart = () => {
    alert(`${flower.name} added to cart!`);
  };

  return (
    <div className="flower-card">
      <div className="flower-image">
        <img src={flower.image} alt={flower.name} />
        <div className="card-icons">
          <Heart
            size={24}
            className={`icon heart ${isLiked ? "liked" : ""}`}
            onClick={onLike}
          />
          <ShoppingCart size={24} className="icon cart" onClick={handleAddToCart} />
        </div>
      </div>
      <h3>{flower.name}</h3>
      <p>{flower.description}</p>
      <p className="price">${flower.price}</p>
    </div>
  );
}
export default FlowerCard;