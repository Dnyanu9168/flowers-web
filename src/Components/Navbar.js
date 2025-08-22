import React, { useState } from "react";
import { Sun, Moon, ShoppingCart, Heart, Search } from "lucide-react";
import "./Navbar.css";

function Navbar({ likedFlowers }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showLikes, setShowLikes] = useState(false);

  return (
    <nav className={darkMode ? "navbar dark" : "navbar"}>
      <div className="nav-container">
        <div className="logo">🌸 Flowers</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Flowers / Gallery</li>
          <li>Contact</li>
        </ul>
        <div className="nav-right">
          <div className="search-box">
            <input type="text" placeholder="Search flowers..." />
            <Search className="icon search-icon" />
          </div>

          {/* Wishlist Heart */}
          <div style={{ position: "relative" }}>
            <Heart
              className="icon"
              onClick={() => setShowLikes(!showLikes)}
            />
            {showLikes && likedFlowers.length > 0 && (
              <div className="liked-dropdown">
                {likedFlowers.map((f) => (
                  <div key={f.id} className="liked-item">
                    <img src={f.image} alt={f.name} />
                    <span>{f.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <ShoppingCart className="icon" />
          <button className="icon toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="icon sun" /> : <Moon className="icon moon" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
