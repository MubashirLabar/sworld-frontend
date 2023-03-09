import React, { useState } from "react";

function Categories({ category }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCategory = () => {
    setIsSelected(!isSelected);
  };

  return (
    <label className="item" onClick={handleCategory}>
      <div className="lbl">{category.label}</div>
      <div className={`checkbox ${isSelected ? "active" : ""}`}></div>
    </label>
  );
}

export default Categories;
