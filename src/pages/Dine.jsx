import { useState } from "react";
import { Link } from "react-router-dom";
import dineData from "../data/dineData";
import "../styles/Dine.css";

export default function Dine() {
  const [activeTab, setActiveTab] = useState("restaurants");
  const items =
    activeTab === "restaurants" ? dineData.restaurants : dineData.bars;

  return (
    <div className="dine">
      {/* ── Tabs ── */}
      <div className="dine-tabs">
        <button
          className={`dine-tab ${activeTab === "restaurants" ? "dine-tab--active" : ""}`}
          onClick={() => setActiveTab("restaurants")}
        >
          🍽 Restaurants
        </button>
        <button
          className={`dine-tab ${activeTab === "bars" ? "dine-tab--active" : ""}`}
          onClick={() => setActiveTab("bars")}
        >
          🍷 Bars
        </button>
      </div>

      {/* ── Card list ── */}
      <div className="dine-list">
        {items.map((item) => (
          <Link
            key={item.id}
            to={
              activeTab === "bars"
                ? `/bar/${item.id}`
                : `/restaurant/${item.id}`
            }
            className="dine-card"
          >
            <img src={item.image} alt={item.name} className="dine-card-img" />
            <div className="dine-card-overlay" />
            <div className="dine-card-copy">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
