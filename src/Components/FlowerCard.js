import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import "./FlowerCard.css";

function FlowerCard({ flower, isLiked, onLike }) {
  if (!flower) return null;

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
          <ShoppingCart
            size={24}
            className="icon cart"
            onClick={handleAddToCart}
          />
        </div>
      </div>
      <div className="flower-details">
        <h3>{flower.name}</h3>
        <p className="description">
          {flower.description || "A beautiful flower for your garden 🌸"}
        </p>
        <p className="price">${flower.price}</p>
        <button className="buy-btn" onClick={handleAddToCart}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default FlowerCard;
