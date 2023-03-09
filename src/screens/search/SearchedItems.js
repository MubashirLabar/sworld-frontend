import ProductCard from "components/ProductCard";
import React from "react";

function SearchedItems() {
  return (
    <div className="searched-items-section">
      {[...Array(12)].map((item, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}

export default SearchedItems;
